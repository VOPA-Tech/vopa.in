import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ORIGIN = 'https://www.naavy.io';

const SEO = ({
    title = 'Naavy',
    description = '',
    keywords = '', // comma-separated string
    link, // absolute canonical
    canonicalPath, // e.g. '/landing/features/...'
    image,
    noindex = false,
    siteName = 'Naavy',
}) => {
    // normalize spaces around commas
    const kw = (keywords || '')
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)
        .join(', ');

    const canonical =
        link ||
        (canonicalPath
            ? `${ORIGIN}${canonicalPath}`
            : typeof window !== 'undefined'
            ? `${ORIGIN}${window.location.pathname}`
            : ORIGIN);

    return (
        <Helmet>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

            {description && <meta name="description" content={description} />}
            {kw && <meta name="keywords" content={kw} />}
            <link rel="canonical" href={canonical} />

            {noindex && <meta name="robots" content="noindex,nofollow" />}

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            {description && <meta property="og:description" content={description} />}
            <meta property="og:url" content={canonical} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={siteName} />
            {image && <meta property="og:image" content={image} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            {description && <meta name="twitter:description" content={description} />}
            {image && <meta name="twitter:image" content={image} />}
        </Helmet>
    );
};

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string, // <— string only
    link: PropTypes.string,
    canonicalPath: PropTypes.string,
    image: PropTypes.string,
    noindex: PropTypes.bool,
    siteName: PropTypes.string,
};

export default SEO;
