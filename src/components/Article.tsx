interface ArticleProps {
  children: React.ReactNode;
}

export const Article: React.FC<ArticleProps> = ({ children }) => {
  return (
    <article className="flex p-5 flex-col gap-10 bg-white rounded-[16px] overflow-auto h-full">
      {children}
    </article>
  );
};
