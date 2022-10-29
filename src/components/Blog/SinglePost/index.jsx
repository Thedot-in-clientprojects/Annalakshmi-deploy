import PostContent from './PostContent';
import Sidebar from './Sidebar';
import RecentPosts from './RecentPosts';
import Comments from './Comments';
import CommentsForm from './Form';
import singlePost from '../../../data/blog/single-post.json';

const Post = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <PostContent post_meta={singlePost.meta} />
          <Sidebar
            categories={singlePost.categories}
            latest_posts={singlePost.latest_posts}
            tags={singlePost.tags}
            gallery={singlePost.gallery}
          />
        </div>
      </div>
      <RecentPosts recent_blogs={singlePost.recent_blogs} />
      <Comments comments={singlePost.comments} />
      <CommentsForm />
    </section>
  )
}

export default Post;