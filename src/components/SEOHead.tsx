import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOHead = ({
  title = "Esinti - Global Products, Local Trust",
  description = "Delivering Industrial Excellence Across India. Premium industrial products including Heavy Duty Connectors, IR Lamps, UV Lamps, Hot Foil Machines, Gearboxes, Encoders, and Diaphragm Pumps at competitive prices.",
  keywords = "industrial products, heavy duty connectors, IR lamps, UV lamps, hot foil machines, gearboxes, encoders, diaphragm pumps, industrial equipment India",
  image = "/placeholder.svg",
  url = typeof window !== 'undefined' ? window.location.href : '',
  type = "website"
}: SEOHeadProps) => {
  const siteName = "Esinti";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEOHead;
