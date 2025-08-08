import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import matter from 'front-matter';

import UseHyperlinkKeywords from '../helpers/hyperlinkKeywords';

function hyperlinkKeywordsInNodes(nodes) {
  if (typeof nodes === 'string') {
    return UseHyperlinkKeywords(nodes);
  }

  return React.Children.map(nodes, child => {
    if (typeof child === 'string') {
      return UseHyperlinkKeywords(child);
    }
    if (React.isValidElement(child) && child.props.children) {
      return React.cloneElement(child, {
        children: hyperlinkKeywordsInNodes(child.props.children)
      });
    }
    return child;
  });
}

export default function BonusContent() {
    const { id } = useParams();

    const [content, setContent] = useState('');
    const [data, setData] = useState({});

    useEffect(() => {
        console.log(`Loading content for ID: ${id}`);
        if (!id) return <p>ID {id} not found.</p>;

        // Build path dynamically, e.g. /path/test.md
        const mdPath = `/bonus/${id}.md`;

        fetch(mdPath)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Markdown file not found');
                }
                return res.text();
            })
            .then(text => {
                const { body: content, attributes: data } = matter(text);
                setContent(content);
                setData(data);
            })
            .catch(err => {
                console.error(err);
                setContent('# 404 Not Found');
                setData({});
            });
      }, [id]);

      return (
        <div className="container">
            <article className="blog-post">
                <h1 className={`col-12 header`}>{data.title}</h1>
                <p style={{marginBottom: "0"}}><strong>Posted:</strong> {data.date}</p>
                <p><strong>Last Updated:</strong> {(data['last-updated'] ? data['last-updated'] : data.date)}</p>
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        a({ href, children }) {
                            if (href.endsWith('.md')) {
                                // Convert "other-post.md" into "/posts/other-post"
                                const slug = href.replace(/\.md$/, '');
                                return <Link to={`/bonus/${slug}`}>{children}</Link>;
                            }
                            // External or other links
                            return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
                        },
                        p({ children }) {
                            return <p>{hyperlinkKeywordsInNodes(children)}</p>;
                        },
                        // Override just the text rendering
                        text({ children }) {
                            return <>{hyperlinkKeywordsInNodes(children)}</>;
                        }
                    }}
                >
                    {content}
                </ReactMarkdown>
            </article>
        </div>
    );
}
