import { NotionAPI } from "notion-client";

const api = new NotionAPI();

export const getNotionPageData = async (pageId) => {
  return api.getPage(pageId).catch((err) => {
    console.error(err);
    return { block: {} };
  });
};
