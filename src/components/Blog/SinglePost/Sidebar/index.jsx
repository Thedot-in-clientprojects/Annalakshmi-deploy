import Search from './Search';
import Categories from './Categories';
import LatestPosts from './LatestPosts';
import Tags from './Tags';
import Gallery from './Gallery';

const Sidebar = ({ categories, latest_posts, tags, gallery }) => {
  return (
    <div className="col-lg-4">
      <div className="side-bar">
        <Search />
        <Categories categories={categories} />
        <LatestPosts latest_posts={latest_posts} />
        <Tags tags={tags} />
        <Gallery gallery={gallery} />
      </div>
    </div>
  )
}

export default Sidebar