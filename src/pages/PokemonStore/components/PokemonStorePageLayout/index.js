import React from "react";
import Pagination from "@material-ui/lab/Pagination";

import styles from "./style.module.scss";

const PokemonStorePageLayout = ({ pokemonsList, isLoading, handleGoToDetails, currentPage, handlePageChange }) => {
  return (
      <div>
        <h1>Pokemon Store Page</h1>

        <div>
          {isLoading ? (
              <div className={styles.progressBar}/>
          ) : (
              <div>
                <div className={styles.pokemonTitle}>Pokémon Store</div>
                <div className={styles.pokemonWrapper}>

                  <div className={styles.pokemonList}>
                    {pokemonsList.map((pokemon) => (
                        <div className={styles.pokemonCard} key={pokemon.id}>
                          <h3 className={styles.pokemonCardTitle} onClick={() => handleGoToDetails(pokemon.id)}>{pokemon.id}. {pokemon.name}</h3>
                          <div className={styles.pokemonCardContent}>
                            <div className={styles.pokemonCardPhoto}>
                              <img src={pokemon.image} alt='Pokemon' onClick={() => handleGoToDetails(pokemon.id)} />
                            </div>
                            <p>Price: <strong>{pokemon.price}</strong> coins</p>
                            <button className={styles.pokemonCardButton}
                                    onClick={() => handleGoToDetails(pokemon.id)}>See
                              more
                            </button>
                          </div>
                        </div>
                    ))}
                  </div>

                  <div className={styles.paginationWrapper}>
                    <div className={styles.pagination}>
                      <Pagination
                          onChange={handlePageChange}
                          page={currentPage}
                          count={7}
                          variant="outlined"
                          shape="rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>
          )}
        </div>
      </div>
  )
};

export default PokemonStorePageLayout;