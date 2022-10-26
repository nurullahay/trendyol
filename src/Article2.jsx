const Article = props => {
    let { storyURL, storyImgURL, storyName } = props.data;


  return (
    <>
        <div id="article">
          <a href={storyURL}>
            <img src={storyImgURL} alt=""/>  
            <span className='artP'>{storyName}</span>
          </a>
        </div>
    </>
  );
}

export default Article;