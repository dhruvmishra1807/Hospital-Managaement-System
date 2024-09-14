import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
      <div className="banner">
        <img src={imageUrl} alt="AboutImage" className='animated-image' />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who are We</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit maxime excepturi odit impedit, dolores, rerum cupiditate perferendis facilis nobis quia molestiae et inventore pariatur veritatis fuga? Dicta neque eaque, accusamus minus unde quia accusantium eos recusandae quae qui dolores officia mollitia temporibus aperiam quod sit commodi deserunt laboriosam eius voluptas?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, suscipit cum? Modi fugiat dicta ipsa exercitationem debitis non dignissimos, ut itaque commodi consectetur mollitia, natus ducimus nesciunt vitae at. Quae nesciunt recusandae tempore dolore amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, amet.</p>
      </div>
    </div>
  )
}

export default Biography
