
import './App.css'

function App() {

  return (
    <>
      <div className='max-md:h-[100vh] w-full relative'>
        <img className='w-full max-md:h-[100vh]' src='https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F55d7c998-fd67-4237-a21a-c7f9699e229a%2FScreen_Shot_2023-11-26_at_10.49.03_AM_cleanup.png?table=block&id=fff185a2-dff1-81af-bc73-de1e521c36bc&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=1420&userId=&cache=v2'></img>
        <div className='absolute top-[50%] left-[5%] text-white flex flex-col gap-[2rem] max-md:gap-[1.5rem]  translate-y-[-50%]'>
          <h3 className='font-bold text-l'>fresh goods</h3>
          <h1 className='font-bold text-7xl max-md:text-xl'>Concisely<br></br>
            describe your<br></br>
            product or service
          </h1>
          <p className='font-bold text-lg w-[50vw]'>No need to get clever. Tell people exactly what you're offering, then
            usef this space to communicate your key value proposition.
          </p>
          <button className='bg-amber-400 p-[10px] w-[10vw]'>ORDER NOW</button>
        </div>

      </div>
      <div className='flex flex-col items-center text-center gap-4 pt-[50px]'>
        <h1 className='font-bold text-4xl max-md:text-xl'>Here are some of the benefits<br></br>
          of your offer
        </h1>
        <p>Explain what makes your product or service great. Talk about features in a way <br></br>
          that highlights the real value people get out of them.
        </p>
        <div className='flex w-full justify-evenly pt-[50px] pb-[50px] max-md:flex-col'>

          <div className='flex flex-col w-[10vw] items-center max-md:w-[100vw]'>
            <img src='https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/b41bc87d-freshgoods-benefit2-icon_1000000000000000000028.png'></img>
            <h2>Benefit 1</h2>
            <p className='p-[10px]'>For example,restaurants and
              bakerries could outline the heath benefits of their all
              natural ingredients.
            </p>
          </div>

          <div className='flex flex-col w-[10vw] items-center  max-md:w-[100vw]'>
            <img src='https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/6622ad60-freshgoods-benefit3-icon_1000000000000000000028.png'></img>
            <h2>Benefit 2</h2>
            <p  className='p-[10px]'>For example,restaurants and
              bakerries could outline the heath benefits of their all
              natural ingredients.
            </p>
          </div>

          <div className='flex flex-col w-[10vw] items-center max-md:w-[100vw]'>
            <img src='https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/3a18a275-freshgoods-benefit1-icon_1000000000000000000028.png'></img>
            <h2>Benefit 3</h2>
            <p  className='p-[10px]'>For example,restaurants and
              bakerries could outline the heath benefits of their all
              natural ingredients.
            </p>
          </div>
        </div>
      </div>

      <div className='relative w-full text-center'>
        <img className='w-full h-full' src='https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2Fb065d811-70a9-454e-947e-699ec2801a37%2FScreen_Shot_2023-11-26_at_11.01.17_AM_cleanup.png?table=block&id=fff185a2-dff1-8155-8342-ca7bab2c8a64&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=1420&userId=&cache=v2'></img>
        <div className='absolute top-[50%] left-[50%] flex flex-col items-center translate-x-[-50%] translate-y-[-50%]	gap-4 text-white'>
          <h2>what our customers say</h2>
          <h1>,,</h1>
          <h1 className=''>share a real testimonial that hits some of<br></br>
            your benefits (but isn't too sales-y).
          </h1>
          <img src='https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/1a1f4659-freshgoods-testimonial_1000000000000000000028.png'></img>
        </div>
      </div>


      <div className='flex w-full justify-evenly items-center pt-[50px] pb-[50px] text-center bg-slate-300 max-md:flex-col'>

        <div className='flex flex-col w-[20vw] items-center max-md:w-[90vw]'>
          <img src='https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/6765ae81-freshgoods-feature1_10go0b20go09e00000001o.jpg'></img>
          <h2>feature 1</h2>
          <p>example,restaurants and
            bakerries could outline the heath benefits of their all
            natural ingredients.
          </p>
        </div>

        <div className='flex flex-col w-[20vw] items-center max-md:w-[90vw]'>
          <img src='https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/bf92a2f6-freshgoods-feature2_10go0ku0go09e00009e01o.jpg'></img>
          <h2>feature 2</h2>
          <p>example,restaurants and
            bakerries could outline the heath benefits of their all
            natural ingredients.
          </p>
        </div>

        <div className='flex flex-col w-[20vw] items-center max-md:w-[90vw]'>
          <img src='https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/f55dfcfa-freshgoods-feature3_10go0b40go09e00000601o.jpeg'></img>
          <h2>feature 3</h2>
          <p>example,restaurants and
            bakerries could outline the heath benefits of their all
            natural ingredients.
          </p>
        </div>
      </div>
      <div className='flex justify-center items-center pt-[50px] pb-[50px] max-md:flex-col'>
        <img className='w-[35vw] max-md:w-[90vw]' src='https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/ef9d9b9f-freshgoods-about_100000000000000000001o.jpg'></img>
        <div className='w-[35vw] max-md:w-[90vw] p-[10px] text-center'>
          <h1 className='h1'>Some more information about your business</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo alias autem, ea, corrupti iste maxime reiciendis nam amet at deserunt perspiciatis eaque in illum dolor magni harum repudiandae dolore ullam.</p>
        </div>
      </div>
      
      <div className='w-full absolute '>
        <img className='w-full ' src='https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F1bf45807-806c-4ab9-a756-d7ff6c3f56f6%2FScreen_Shot_2023-11-26_at_11.03.28_AM_cleanup.png?table=block&id=fff185a2-dff1-81fe-af84-fb1490a042ab&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=1420&userId=&cache=v2'></img>
        <div className='absolute top-[50%] left-[50%] flex flex-col items-center translate-x-[-50%] translate-y-[-50%]	gap-4 text-black text-center'>
          <h1 className='font-bold text-6xl max-md:text-3xl'>End with one final call to action</h1>
          <p>This is your last shot at converting someone. Remind them about the benefits of your offer and encourage them to act now.</p>
          <button className='bg-amber-400 p-[10px] w-[10vw] max-md:w-[50vw]'>ORDER NOW</button>
        </div>
      </div>
      <div className='bg-black text-center text-white w-full h-[5vh]' >
        <div>
        © 2020 Insert Name Here. All rights reserved.
        </div>
      </div>
    </>
  )
}

export default App
