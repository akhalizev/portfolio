interface ThumbnailProps {
  title: string;
  href: string;
}

const Thumbnail = (props: ThumbnailProps) => {
  return (
    <a href={props.href} class="block bg-black/5 dark:bg-white/5 rounded-lg p-6 min-h-[150px] flex items-center justify-center text-center transition-all duration-200 ease-in-out hover:bg-black/10 dark:hover:bg-white/10">
      <h3 class="text-lg font-semibold text-black/80 dark:text-white/80">{props.title}</h3>
    </a>
  );
};

export default Thumbnail;
