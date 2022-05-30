<template>
  <div>
    <h1>Examen de théorie</h1>
    <Message title="FM1 - 2021/2022 / Examen 7/06 - 14/06">
      <ul>
        <li>Lecture de note</li>
        <li>Chant connu (la merveille de la musique)</li>
        <li>Examen de rythme</li>
        <li>Clef de Sol</li>
        <li>Examen de dictée (aprège/accord, conjoint/disjoint)</li>
        <li>Examen de théorie</li>
      </ul>
    </Message>

    <ul class="index-list">
      <li><a href="#portee">1. La portée</a></li>
      <li><a href="#gamme">2. La gamme</a></li>
      <li><a href="#stacatto">3. Stacatto / Legato</a></li>
      <li><a href="#instruments">4. Les instruments</a></li>
      <li><a href="#tempo">5. Les indications de tempo</a></li>
      <li><a href="#nuances">6. Les indications de nuances</a></li>
      <li><a href="#rythmes">7. Les rythmes et silences</a></li>
    </ul>

    <section class="section">
      <h2 id="portee">1. La portée</h2>
      <article class="article">
        <Message>
          <p>
            <strong>Note:</strong>
            L'examen portera sur la bonne compréhension des termes donnés
            ci-dessous. Je ne demanderai pas de définitions, mais je vérifierai
            la bonne compréhension des différents termes.
          </p>
        </Message>
        <p>
          Les notes sont écrites sur la <strong><em>portée</em></strong
          >:
        </p>
        <div>
          <MusicStaff :hasBarLines="false" />
        </div>
      </article>

      <article class="article">
        <h3>La clé de Sol</h3>
        <p>
          La <strong><em>clé de Sol</em></strong> est importante ! Elle nous
          indique où se trouvent les notes.
        </p>
        <p>(Vous devrez la dessiner sur la portée à l'examen)</p>
        <div>
          <MusicStaff :hasBarLines="false">
            <TrebleClef class="range-mode-icon" />
          </MusicStaff>
        </div>
      </article>

      <article class="article">
        <h3>La mesure</h3>
        <p>
          Une <strong><em>mesure</em></strong> est un morceau de portée. Les
          mesures d'un morceau ont toujours la même longueur, et elles sont
          utiles pour ne pas se perdre.
        </p>
        <div>
          <MusicStaff>
            <TrebleClef class="range-mode-icon" />
          </MusicStaff>
        </div>
        <p>Chaque mesure est séparée par une barre de mesure.</p>
      </article>
    </section>

    <section class="section">
      <h2 id="gamme">2. La gamme</h2>
      <article class="article">
        <p>
          Une <strong><em>gamme</em></strong
          >, est une suite de notes (généralement 7) dans une
          <strong><em>octave</em></strong
          >. Voici la <strong><em>gamme de do</em></strong
          >.
        </p>
        <div>
          <div class="todo"><strong> TODO</strong></div>
          <MusicStaff :hasBarLines="false">
            <TrebleClef class="range-mode-icon" />
          </MusicStaff>
        </div>
        <p>Voici la gamme de do sur le piano.</p>
        <div>
          <PianoKeyboard />
        </div>
        <Message>
          <p>
            <strong>Note:</strong>
            Il y a 7 notes dans la gamme de do (on ne compte pas deux fois le do
            !), mais il existe en tout un total de 12 notes (sur le piano, 7
            touches blanches et 5 touches noires).
          </p>
        </Message>
        <p>
          Chaque note a une <strong>hauteur</strong> différente ( un ré est plus
          haut qu'un do).
        </p>
      </article>
      <article class="article">
        <h3>L'intervalle</h3>
        <p>
          Un intervalle est la <strong>"distance"</strong> de hauteur qui sépare
          deux notes.
        </p>
        <p>
          Par exemple, l'intervalle qui sépare do et ré est plus petit que
          l'intervalle qui sépare do et sol.
        </p>
        <p>Le plus petit intervalle est le <strong>demi-ton</strong>.</p>
      </article>
      <article class="article">
        <h3>Le dièse</h3>
        <p>
          Un dièse (#) devant une note indique que celle-ci doit monter d'un
          demi-ton. Sur le piano, le do# est donc la touche noire à droite du
          do. A l'inverse, un bémo (b) devant une note indique qu'elle descend
          d'un demi-ton.
        </p>
      </article>
      <article class="article">
        <h3>Notes conjointes</h3>
        <p>
          Deux notes sont conjointes si elles sont adjacentes sur la gamme, donc
          l'une à côté de l'autre (par exemple do et ré, ou bien sol et la).
        </p>
        <p>
          Des notes séparées sont des notes disjointes (do et mi, ou bien mi et
          si).
        </p>
        <p>
          Les notes conjointes de la gamme de do ne sont pas toutes séparées par
          le même intervalle ! Comme on peut le voir sur le piano, il n'y a pas
          de touche noire entre mi et fa, ainsi qu'entre si et do.
        </p>
        <p>
          mi-fa et si-do sont donc séparées par un demi-ton, alors que les
          autres notes sont séparées par un ton.
        </p>
        <div>
          <div class="todo">TODO</div>
          <MusicStaff :hasBarLines="false">
            <TrebleClef class="range-mode-icon" />
          </MusicStaff>
        </div>
      </article>
    </section>

    <section class="section">
      <h2 id="stacatto">3. Stacatto / Legato</h2>
      <article class="article">
        <h3>Legato (ou note portée)</h3>
        <p>Les notes sont liées les unes avec les autres.</p>
        <div><img src="./../assets/Legato.jpg" alt="Exemple Legato" /></div>
      </article>
      <article class="article">
        <h3>Stacatto (ou note piquée)</h3>
        <p>Les notes sont courtes, et détachées.</p>
        <div><img src="./../assets/Stacatto.jpg" alt="Exemple Stacatto" /></div>
      </article>
    </section>

    <section class="section">
      <h2 id="instruments">4. Les instruments</h2>
      <p>
        Il existe plusieurs familles d'instruments : (pour l'examen, il faut être
        capable d'en citer un de chaque famille)
      </p>

      <article class="article">
        <h3>1. Les instruments à cordes répartis en trois catégories</h3>
        <ul>
          <li>
            <h4>Les cordes frottées :</h4>
            <ul>
              <li>Le violon</li>
              <li>L'alto</li>
              <li>Le violoncelle</li>
              <li>La contrebasse</li>
              <li>La viole</li>
              <li>etc...</li>
            </ul>
            <h4>Les cordes pincées :</h4>
            <ul>
              <li>La guitare</li>
              <li>Le luth</li>
              <li>La harpe</li>
              <li>etc...</li>
            </ul>
            <h4>Les cordes frappées :</h4>
            <ul>
              <li>Le piano, aussi considéré comme un instrument à clavier</li>
              <li>etc...</li>
            </ul>
          </li>
        </ul>
      </article>
      <article class="article">
        <h3>2. Les instruments à vent, répartis en deux catégories :</h3>
        <ul>
          <li>
            <h4>La famille des bois :</h4>
            <ul>
              <li>La flûte à bec</li>
              <li>Le hautbois</li>
              <li>La flûte traversière</li>
              <li>Le basson</li>
              <li>La clarinette</li>
              <li>etc...</li>
            </ul>
          </li>
          <li>
            <h4>La famille des cuivres :</h4>
            <ul>
              <li>La trompette</li>
              <li>Le trombone</li>
              <li>La cor</li>
              <li>etc...</li>
            </ul>
          </li>
        </ul>
      </article>
      <article class="article">
        <h3>3. Les percussions :</h3>
        <ul>
          <li>La batterie</li>
          <li>Le xylophone</li>
          <li>Le tambour</li>
          <li>Les cymbales</li>
          <li>etc...</li>
        </ul>
      </article>
    </section>

    <section class="section">
      <h2 id="tempo">5. Les indications de tempo : (Pas pour l'examen)</h2>
      <p>
        La vitesse d'un morceau est, traditionnellement, désignée par des mots
        italiens.
      </p>
      <p>
        Ceux-si sont généralement écrits au début d'un morceau, afin d'indiquer
        aux musiciens à quel tempo ils doivent jouer.
      </p>

      <p>
        Voici les termes italiens les plus souvent utilisés, triés du plus lent
        au plus rapide :
      </p>

      <div class="columns columns-2">
        <ul>
          <li class="columns-title">Terme</li>
          <li>Largo</li>
          <li>Adagio</li>
          <li>Andante</li>
          <li>Moderato</li>
          <li>Allegro</li>
          <li>Vivace</li>
          <li>Presto</li>
        </ul>
        <ul>
          <li class="columns-title">Signification</li>
          <li>Large(lent)</li>
          <li>A l'aise</li>
          <li>Allant</li>
          <li>Modéré</li>
          <li>Allègre, gai</li>
          <li>Vif</li>
          <li>Rapide</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <h2 id="nuances">
        6. Les indications de nuances : (pour l'examen, connaître piano et
        forte)
      </h2>
      <p>
        Les nuances indiquent au musicien avec quelle intensité (donc la force
        de chaque note) il doit joue rdu morceau. Voici les nuances principales.
      </p>

      <!-- <div class="columns columns-3">
        <ul>
          <li>pp</li>
          <li>p</li>
          <li>mp</li>
          <li>mf</li>
          <li>f</li>
          <li>ff</li>
          <li> &lt; </li>
          <li> &gt; </li>
        </ul>
        <ul>
          <li>pianissimo (ou double-piano)</li>
          <li>piano</li>
          <li>mezzo-piano</li>
          <li>mezzo-forte</li>
          <li>forte</li>
          <li>fortissimo (ou double-forte)</li>
          <li>crescendo</li>
          <li>descrescendo</li>
        </ul>
        <ul>
          <li>très doux</li>
          <li>doux</li>
          <li>plutot doux</li>
          <li>plutot fort</li>
          <li>fort</li>
          <li>très fort</li>
          <li>de plus en plus fort</li>
          <li>de moins en moins fort</li>
        </ul>
      </div> -->
      <div class="grid-3 gap-1">
        <!-- Pianissimo -->
        <div>pp</div>
        <div>pianissimo (ou double-piano)</div>
        <div>très doux</div>

        <!-- Piano -->
        <div>p</div>
        <div>piano</div>
        <div>doux</div>

        <!-- Mezzo Piano -->
        <div>mp</div>
        <div>mezzo-piano</div>
        <div>plutot doux</div>

        <!-- Mezzo Forte -->
        <div>mf</div>
        <div>mezzo-forte</div>
        <div>plutot fort</div>

        <!-- Forte -->
        <div>f</div>
        <div>forte</div>
        <div>fort</div>

        <!-- Fortissimo -->
        <div>ff</div>
        <div>fortissimo (ou double-forte)</div>
        <div>très fort</div>

        <!-- Crescendo -->
        <div>&lt;</div>
        <div>crescendo</div>
        <div>de plus en plus fort</div>

        <!-- Decrescendo -->
        <div>&gt;</div>
        <div>descrescendo</div>
        <div>de moins en moins fort</div>
      </div>
    </section>

    <section class="section">
      <h2 id="rythmes">7. Les rythmes et silences (pas pour l'examen)</h2>

      <div class="grid-3 gap-1">
        <!--  -->
        <div class="columns-title">Les temps</div>
        <div class="columns-title">Les notes</div>
        <div class="columns-title">Les silences</div>

        <!--  -->
        <div>4</div>
        <div>
          <img
            src="./../../src/assets/notes/ronde.png"
            alt="ronde"
            width="24"
          />
          <div>la ronde</div>
        </div>
        <div><img src="" alt="(chapeau à l'envers)" width="24" /> la pause</div>

        <!--  -->
        <div>3</div>
        <div>
          <img
            src="./../../src/assets/notes/blanche_pointee.png"
            alt="blanche pointée"
            width="24"
          />
          <div>la blanche pointée</div>
        </div>
        <div>
          <img
            src="./../../src/assets/notes/demi_pause_pointee.png"
            alt="demi-pause pointée"
            width="24"
          />
          <div>la demi-pause pointée</div>
        </div>

        <!--  -->
        <div>2</div>
        <div>
          <img
            src="./../../src/assets/notes/blanche.png"
            alt="blanche"
            width="24"
          />
          <div>la banche</div>
        </div>
        <div>
          <img
            src="./../../src/assets/notes/demi_pause.png"
            alt="demi-pause"
            width="24"
          />
          <div>la demi-pause</div>
        </div>

        <!--  -->
        <div>1 1/2</div>
        <div>
          <img
            src="./../../src/assets/notes/noire_pointee.png"
            alt="noire pointée"
            width="24"
          />
          <div>la noire pointée</div>
        </div>
        <div>
          <img src="" alt="soupir pointé" width="24" /> le soupir pointé
        </div>

        <!--  -->
        <div>1</div>
        <div>
          <img
            src="./../../src/assets/notes/noire.png"
            alt="noire"
            width="24"
          />
          <div>la noire</div>
        </div>
        <div><img src="" alt="soupir" width="24" /> le soupir</div>

        <div>1/2</div>
        <div>
          <img
            src="./../../src/assets/notes/croche.png"
            alt="croche"
            width="24"
          />
          <div>la croche</div>
        </div>
        <div>
          <img
            src="./../../src/assets/notes/demi_soupir.png"
            alt="demi-soupir"
            width="24"
          />
          <div>le demi-soupir</div>
        </div>

        <div>1/4</div>
        <div>
          <img
            src="./../../src/assets/notes/double_croche1.png"
            alt="double croche"
            width="24"
          />
          <div>la double-croche</div>
        </div>
        <div>
          <img src="" alt="quart-soupir" width="24" /> le quart de soupir?
        </div>
      </div>

      <!-- <div class="columns columns-3 rythms-silences">
        <ul>
          <li class="columns-title">Les temps</li>
          <li>4</li>
          <li>3</li>
          <li>2</li>
          <li>1 1/2</li>
          <li>1</li>
          <li>1/2</li>
          <li>1/4</li>
        </ul>
        <ul>
          <li class="columns-title">Les notes</li>
          <li>
            <img
              src="./../../src/assets/notes/ronde.png"
              alt="ronde"
              width="24"
            />
            <div>la ronde</div>
          </li>
          <li>
            <img
              src="./../../src/assets/notes/blanche_pointee.png"
              alt="blanche pointée"
              width="24"
            />
            <div>la blanche pointée</div>
          </li>
          <li>
            <img
              src="./../../src/assets/notes/blanche.png"
              alt="blanche"
              width="24"
            />
            <div>la banche</div>
          </li>
          <li>
            <img
              src="./../../src/assets/notes/noire_pointee.png"
              alt="noire pointée"
              width="24"
            />
            <div>la noire pointée</div>
          </li>
          <li>
            <img
              src="./../../src/assets/notes/noire.png"
              alt="noire"
              width="24"
            />
            <div>la noire</div>
          </li>
          <li>
            <img
              src="./../../src/assets/notes/croche.png"
              alt="croche"
              width="24"
            />
            <div>la croche</div>
          </li>
          <li>
            <img
              src="./../../src/assets/notes/double_croche1.png"
              alt="double croche"
              width="24"
            />
            <div>la double-croche</div>
          </li>
        </ul>
        <ul>
          <li class="columns-title">Les silences</li>
          <li><img src="" alt="(chapeau à l'envers)" width="24" /> la pause</li>
          <li>
            <img
              src="./../../src/assets/notes/demi_pause_pointee.png"
              alt="demi-pause pointée"
              width="24"
            />
            <div>la demi-pause pointée</div>
          </li>
          <li>
            <img
              src="./../../src/assets/notes/demi_pause.png"
              alt="demi-pause"
              width="24"
            />
            <div>la demi-pause</div>
          </li>
          <li>
            <img src="" alt="soupir pointé" width="24" /> le soupir pointé
          </li>
          <li><img src="" alt="soupir" width="24" /> le soupir</li>
          <li>
            <img
              src="./../../src/assets/notes/demi_soupir.png"
              alt="demi-soupir"
              width="24"
            />
            <div>le demi-soupir</div>
          </li>
          <li>
            <img src="" alt="quart-soupir" width="24" /> le quart de soupir?
          </li>
        </ul>
      </div> -->
    </section>
  </div>
</template>

<script>
import Message from "@/components/Message.vue";
import MusicStaff from "@/components/icons/MusicStaff.vue";
import TrebleClef from "@/components/icons/TrebleClef.vue";
import PianoKeyboard from "@/components/icons/PianoKeyboard.vue";

export default {
  name: "Examen",
  components: {
    Message,
    MusicStaff,
    TrebleClef,
    PianoKeyboard,
  },
};
</script>

<style>
/* columns */
.columns ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.columns li {
  padding: 0.75rem 0;
}
.columns-title {
  font-weight: bold;
}
.columns-2 {
  column-count: 2;
}

.columns-3 {
  column-count: 3;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-transform: capitalize;
}

.gap-1 {
  gap: 1rem;
}

.rythms-silences {
  display: flex;
  justify-content: space-between;
}

/* index */
.index-list {
  list-style: none;
  text-align: left;
}

.index-list li {
  padding: 0.5rem 0;
}

.section {
  padding: 3rem 0;
  border-bottom: 1px solid lightgrey;
  text-align: left;
}

.article {
  margin-bottom: 2rem;
}
</style>