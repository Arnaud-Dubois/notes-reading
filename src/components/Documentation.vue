<template>
  <div>
    <h1>Documentation</h1>
    <h2>Notes</h2>
    <ul>
        <DocumentationItem :title="note.name" :key="note.name" v-for="note in notes">{{ note.name }}</DocumentationItem>
    </ul>
    
    <h2>Variations</h2>
    <ul>
        <DocumentationItem :title="variation.name" :key="variation.name" v-for="variation in variations">{{ variation.name }}</DocumentationItem>
    </ul>

    <h2>Accord</h2>
    <ul>
        <DocumentationItem :title="accord.name" :key="accord.name" v-for="accord in accords">{{ accord.name }}</DocumentationItem>
    </ul>

    <h2>Silence</h2>
    <ul>
        <DocumentationItem :title="silence.name" :key="silence.name" v-for="silence in silences">{{ silence.name }}</DocumentationItem>
    </ul>

    <h2>Rythme</h2>
    <ul>
        <DocumentationItem :title="rythme.name" :key="rythme.name" v-for="rythme in rythmes">{{ rythme.name }}</DocumentationItem>
    </ul>


    <h2>Autres</h2>
    <ul>
        <DocumentationItem :title="autre.name" :key="autre.name" v-for="autre in autres">{{ autre.name }}</DocumentationItem>
    </ul>

    <h2>Portée</h2>
    <ul>
        <DocumentationItem :title="portee.name" :key="portee.name" v-for="portee in portees">{{ portee.name }}</DocumentationItem>
    </ul>

    <h2>Gamme</h2>
    <ul>
        <DocumentationItem :title="gamme.name" :key="gamme.name" v-for="gamme in gammes">{{ gamme.name }}</DocumentationItem>
    </ul>

  </div>
</template>

<script>
import DocumentationItem from './DocumentationItem.vue'

export default {
  name: "Documentation",
  components: {
      DocumentationItem
  },
  data() {
      return {
          notes: [
              { name: 'Do' },
              { name: 'Ré' },
              { name: 'Mi' },
              { name: 'Fa' },
              { name: 'Sol' },
              { name: 'La' },
              { name: 'Si' },
              { name: 'Do+1' },
              { name: 'Demi-ton (Mi-Fa)' },
              { name: 'Demi-ton (Si-Do)' },
          ],
          variations: [
              { name: 'Note piquée (plus courte lorsque chantée)' },
              { name: 'Note lourée (détachée lourdement - appuyer sur la route)' },
              
          ],
          accords: [
              { name: 'Tierce I, II, V' },
              { name: 'Quinte I, V' },
              
          ],
          silences: [
              { name: 'Soupir silence(1 temps)' },
              { name: 'Demi-pause est un silence qui vaut 2 temps' },
              
          ],
          rythmes: [
              { name: '4 double croches (4 doubles)' },
              { name: '2 croches' },
              { name: 'Noir = 1 pulse' },
              { name: 'Croche = 1 pulse pour 2 croches' },
              { name: 'blanche(2 temps)' },
              { name: 'Croche pointée double (3 croches + 1 croche)' },
              { name: 'forte(fort)' },
              { name: 'piano(doux)' },
              { name: 'mf(mezzo forte - moyennement fort)' },
              { name: 'allegro(rapide, gai)' },
              { name: 'crescendo (de plus en plus fort)' },
          ],
          autres: [
              { name: 'point d\'orgue (prolonger la durée de la note)' },
              { name: 'legato (liaision de notes)' },
              { name: 'Un intervalle c\'est la distance qui sépare 2 sons' },
              { name: 'DC - Da Capo al fine (reprend du début jusque Fine)' },
              { name: 'Barres de reprise (fin et recommence)' },
              { name: 'accens (renforcer la note)' },
          ],
          portees: [
              { name: 'Bémol' },
              { name: 'Bécarre' },
              { name: 'Barres de reprise' },
          ],
          gammes: [
              { name: 'Gamme de Do majeur et accord parfait' },
          ],
      }
  }
};
</script>