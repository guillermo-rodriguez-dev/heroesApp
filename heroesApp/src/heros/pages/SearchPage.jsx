


import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import queryString from 'query-string'
import { getHeroesByName } from '../helpers/getHeroByName';
import { HeroCard } from '../components/HeroCard';
export default function SearchPage() {


  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search)
  const { searchText, onInputChange } = useForm({
    searchText: ''
  })
  const searchResult = getHeroesByName(q)
  const onSubmitHandle = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`)
    console.log(searchText)
  }

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className='col-5'>
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSubmitHandle}>
            <input value={searchText} onChange={onInputChange} className='form-control' name="searchText" type="text" placeholder='Search Hero' id="search-text" autoComplete='off' />

            <button className='btn btn-outline-primary mt'>Seach</button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Result</h4>
          <hr />
         

          {(q === '') ?  <div className="alert alert-primary" role="alert">
            Search a hero
          </div> : (searchResult.length === 0 ?  <div className="alert alert-danger" role="alert">
            There is no result with {q}
          </div> : <div/>) }
         

          {
            searchResult.map(hero => (
              <HeroCard key={hero.id} {...hero}></HeroCard>
            ))
          }

          <div></div>

        </div>
      </div>


    </>
  )
}
