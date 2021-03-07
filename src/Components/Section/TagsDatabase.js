import { useEffect, useState } from "react";

export const useChangeTagsDatabase = (title, note) => {
  const TagsDatabase = [
    {
      title: "First Heading",
      note: "Lorem Ipsum somthing somthing"
    }
  ];
  const [database, setDatabase] = useState(TagsDatabase);
  useEffect(() => {
    setDatabase([...database, { title: title, note: note }]);
  });
  return database;
};
