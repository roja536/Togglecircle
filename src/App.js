
import './App.css';
import PropsProject from './components/PropsProject';
//import Star from './components/Star';



function App() {
  return ( 
   
    <div>
      <h1 style={{
        display:'flex',
        fontSize:'50px',
        justifyContent:'center',
        alignItems:'center',
        background:' linear-gradient(90deg,red,blue)',
        backgroundClip:'text',
        color:'transparent'

      }}>Cartoon Movies List</h1>
    
      <PropsProject  path='https://www.wonderwall.com/wp-content/uploads/sites/2/2019/11/1067562-frozenii_2019_07.jpg?h=800' alt='Frozen 2' name='Frozen 2' time='12:00pm' rating='⭐⭐⭐⭐⭐' cost='100rs'/>
      <PropsProject  path='https://www.liveabout.com/thmb/_o-_iCHC6AHPDBR67Pl8Fd0UBMg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TheNutJob-56a575333df78cf772887292.jpg' alt='The Nut Job' name='The Nut Job' time='2:00pm' rating='⭐⭐⭐⭐⭐' cost='cost'/>
      <PropsProject  path="https://assets.gqindia.com/photos/5d6510b6b7f16b00088a9e68/1:1/w_722,h_722,c_limit/Animated%20movies%20Netflix.jpg" alt='The Little Princes' name='The Little Princes' time='1:00pm' rating='⭐⭐⭐⭐' cost='85rs'/>
      <PropsProject  path="https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Epic_%282013_film%29_poster.jpg/220px-Epic_%282013_film%29_poster.jpg" alt='epic' name='epic' time='4:00pm' rating='⭐⭐⭐' cost='90rs'/>
      <PropsProject  path="https://m.media-amazon.com/images/M/MV5BMjA4OTE0MjAwNl5BMl5BanBnXkFtZTgwMjY4Mzg2OTE@._V1_.jpg" alt='The WildLife' name='The WildLife' time='5:00pm' rating='⭐⭐⭐⭐' cost='50rs'/>
      <PropsProject  path="https://static0.cbrimages.com/wordpress/wp-content/uploads/2023/11/the-swan-princess.jpg" alt='The Swan Princes' name='The Swan Princes' time='6:00pm' rating='⭐⭐⭐⭐⭐' cost='75rs'/>
      <PropsProject  path="https://qqcdnpictest.mxplay.com/pic/d7a48551a8e3da08ad7d3eb157ed20e8/en/2x3/312x468/test_pic1663656527881.webp" alt='Dhira' name='Dhira' time='7:00pm' rating='⭐⭐⭐⭐' cost='95rs'/>
      <PropsProject  path="https://hips.hearstapps.com/hmg-prod/images/best-netflix-animation-princess-frog-1585599095.jpg" alt='The Princes Frog' name='The Princes Frog' time='8:00pm' rating='⭐⭐⭐' cost='80rs'/>
      <PropsProject  path="https://www.boredpanda.com/blog/wp-content/uploads/2022/05/best-animated-movies-34-6284b7eca9f6b__700.jpg" alt='Brave' name='Brave' time='9:00pm' rating='⭐⭐⭐⭐⭐' cost='55rs'/>
      <PropsProject  path="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1470687895310-LREYS8RYHS3MX0QAXPTD/15_io.jpg" alt='Inside Out' name='Inside Out' time='10:00pm' rating='⭐⭐⭐⭐⭐' cost='86rs'/>
      <PropsProject  path="https://www.dreamworks.com/storage/movies/flushed-away/posters/flushed-away-poster-1.jpg" alt='Flushed Away' name='Flushed Away' time='1:00pm' rating='⭐⭐' cost='79rs'/>
      <PropsProject  path="https://upload.wikimedia.org/wikipedia/en/0/00/The_Bad_Guys_poster.jpeg" alt='The Bad Guys' name='The Bad Guys' time='11:00pm' rating='⭐⭐⭐⭐' cost='100rs'/>
      <PropsProject  path="https://lumiere-a.akamaihd.net/v1/images/p_disney_strangeworld_1260_40682d4f.jpeg" alt='Strage World' name='Strage World' time='12:00pm' rating='⭐⭐⭐' cost='83rs'/>
      <PropsProject  path="https://www.boredpanda.com/blog/wp-content/uploads/2022/01/disney-animated-movies-6-61dc230ecc50b__700.jpg" alt='Tangled' name='Tangled' time='4:00pm' rating='⭐⭐⭐⭐⭐' cost='88rs'/>

    </div>
  );
}

export default App;
