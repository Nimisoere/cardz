import React, { useEffect, useState } from "react";
import Seo from "../../components/Seo/Seo";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rules from "./rules.md";

interface Props {}

const Rules = (props: Props) => {
  const [markdown, setMarkDown] = useState<string>("");
  useEffect(() => {
    const getFile = async () => {
      const res = await fetch(rules);
      const final = await res.text();
      setMarkDown(final);
    };
    getFile();
  }, []);

  return (
    <div>
      <Seo title="Rules" description="Game Rules" />
      <div className="container mx-auto">
        <div className={`w-full bg-white p-8 my-16 rounded text-gray-700`}>
          <ReactMarkdown plugins={[gfm]} children={markdown}></ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Rules;
