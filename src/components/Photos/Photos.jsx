function Photos() {
  return (
    <div className="-my-4 flex justify-center gap-5 py-4 sm:gap-8">
      <div className="relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
        <img
          loading="lazy"
          //   width="3744"
          //   height="5616"
          src="public/image-1.webp"
          alt="Image 1"
          className="w-full h-full"
        />
      </div>
      <div className="relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 -rotate-2">
        <img
          loading="lazy"
          //   width="3744"
          //   height="5616"
          src="public/image-1.webp"
          alt="Image 2"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative aspect-9/10 w-44 flex-none overflow-hidden height-100 rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
        <img
          loading="lazy"
          //   width="3744"
          //   height="5616"
          src="public/image-2.webp"
          alt="Image 3"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 -rotate-2">
        <img
          loading="lazy"
          //   width="3744"
          //   height="5616"
          src="public/image-3.webp"
          alt="Image 4"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
        <img
          loading="lazy"
          //   width="3744"
          //   height="5616"
          src="public/image-4.webp"
          alt="Image 5"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Photos;
