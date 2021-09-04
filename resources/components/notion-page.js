import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "rc-dropdown/assets/index.css";
import "katex/dist/katex.min.css";

export default function NotionPage({ pageData, fullPage = false }) {
  return <NotionRenderer fullPage={fullPage} recordMap={pageData || {}} />;
}
