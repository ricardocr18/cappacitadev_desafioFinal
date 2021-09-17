import React, {useEffect, useState} from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

export default() => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);  //aqui inicamos a configuraçõ do filme em destaque
  const [blackHeader, setBlackHeader] = useState(false); // fazendo a transparencia do Header - False nã aparece o menu e True, sim

  useEffect( () => {
    const loadAll = async () => {
      // PEgando a lista TOTAL
      let list = await Tmdb.getHomeList();
      setMovieList(list); // aqui pegamos a listado movielist

      //pegando o Featured, pegando os filmes da categora Original  
      let originals =  list.filter(i=> i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);     // aqui pegamos os destaques 
    }

    loadAll();
  },  [] );

  useEffect(()=> {
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true);
      }else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }

  }, []);

  return (
    <div className='page'>

      <Header black={blackHeader} />

      {featuredData && <FeaturedMovie item={featuredData} /> }     

      <section className='lists'>
        {movieList.map((item, key) => (
          <div>
            <MovieRow key={key} title={item.title} items={item.items} />
          </div>
        ))}
      </section>

      {movieList.length <= 0 &&
        <div className='loading'>
          <img src='https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif' alt='Carregando Netflix'/>            
        </div>
      }
    </div>      


  );
}