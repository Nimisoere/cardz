import React from "react";
import { Helmet } from "react-helmet";

interface Props {
  title: string;
  description: string;
}

const Seo = ({ title, description }: Props) => {
  return (
    <div className="application">
      <Helmet titleTemplate="%s | Cardz" defaultTitle="Cardz">
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    </div>
  );
};

export default Seo;
