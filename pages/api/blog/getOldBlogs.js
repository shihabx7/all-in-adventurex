import { getPrevBlogs } from "./getSingleBlogData";
export default async function corContactHandler(req, res) {
  const query = req.query;
  const { id } = query;

  const prevBlogs = await getPrevBlogs(id);
  if (!prevBlogs) {
    res.status(404).json({ success: false });
  } else {
    res.status(200).json({ success: true, blogs: prevBlogs });
  }
}
