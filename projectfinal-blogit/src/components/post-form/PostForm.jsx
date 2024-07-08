import React, { useEffect } from "react";
import { useCallback } from "react";
import { RTE, Input, Button, Select } from "./index";
import { useForm, Controller } from "react-hook-form";
import service from "../../appwrite/services";
import { useNavigate } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";

function PostForm({ post }) {
  const navigate = useNavigate();
  const { register, handleSubmit, control, watch, setValue, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        content: post?.content || "",
        slug: post?.slug || "",
        status: post?.status || "active",
      },
    });

  const userData = useSelector((state) => state.auth.user);

  const onSubmitForm = async (data) => {
    if (post) {
      const file = data.image[0]
        ? await service.uploadFile(data.image[0])
        : null;

      if (file) {
        service.deleteFile(post.image);
      }
      const dbPost = await service.updatePost(post.$id, {
        ...data,
        image: file ? file.$id : undefined,
      });

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await service.uploadFile(data.image[0]);

      if (file) {
        const fileId = file.$id;
        data.image = fileId;

        const dbPost = await service.createPost({
          ...data,
          userId: userData.$id,
        });

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value.trim().toLowerCase().replace(/\s+/g, "-");
    }
  });

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value));
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title"
          placeholder="Enter post title"
          {...register("title", { required: true })}
          className="mb-4"
        />

        <Input
          label="Slug"
          placeholder="Enter slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.target.value));
          }}
        />

        <RTE
          label="Content: "
          control={control}
          name="content"
          defaultValues={getValues("content")}
        />
      </div>

      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={service.getFilePreview(post.image)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}

export default PostForm;
