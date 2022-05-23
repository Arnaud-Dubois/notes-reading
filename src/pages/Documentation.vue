<template>
  <div>
    <h1>Documentation</h1>
    
    <div>
        
    </div>
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
    

    <h2>Notes</h2>
    <h3>Liste des degrés</h3>
    
    <ul>
        <li>do</li>
        <li>ré</li>
        <li>mi</li>
        <li>fa</li>
        <li>sol</li>
        <li>la</li>
        <li>si</li>
    </ul>

    <div>premier degré = tonique</div>
    <div>cinquième degré = dominante</div>
    <div>Du premier au cinquième degré = cadence parfaite</div>

    <ul>
        <DocumentationItem :title="note.name" :key="note.name" v-for="note in notes">{{ note.name }}</DocumentationItem>
    </ul>
    
    <h2>Intervalle</h2>
    <ul>

    </ul>

    <h2>Ostinato rythmique</h2>
    <ul>
        <DocumentationItem :title="'ostinato rythmique'">Rythme qui reste toujours le même (1 ou 2 mesures)</DocumentationItem>
    </ul>

    <h2>Variations</h2>
    <ul>
        <DocumentationItem :title="variation.name" :key="variation.name" v-for="variation in variations">{{ variation.name }}</DocumentationItem>
    </ul>

    <h2>nuances</h2>
    <ul>
        <DocumentationItem :title="nuance.name" :key="nuance.name" v-for="nuance in nuances">{{ nuance.name }}</DocumentationItem>
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

    <h2>Mouvements</h2>
    <ul>
        <DocumentationItem :title="mouvement.name" :key="mouvement.name" v-for="mouvement in mouvements">{{ mouvement.name }}</DocumentationItem>
    </ul>

  </div>
</template>

<script>
import DocumentationItem from '@/components/DocumentationItem.vue'
import Message from '@/components/Message.vue'

export default {
  name: "Documentation",
  components: {
      DocumentationItem,
      Message
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
          nuances: [
              { name: 'fortissimo - très fort' },
              { name: 'forte - fort' },
              { name: 'mezzo forte - moyennement fort' },
              { name: 'piano - doux' },
              { name: 'pianissimo - très doux' },
              { name: 'crescendo - de plus en plus fort' },
              { name: 'decrescendo - de moins en moins fort' },
              { name: 'dolce - avec douceur' },
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
              { name: 'Dièse' },
              { name: 'Barres de reprise' },
              { name: 'Altérations dans la portée (altération accidentelle)' },
              { name: 'Altérations devant la portée (altération à l\'armure)' },
              { name: 'Dal Segno ou Signe de renvoi' },
              { name: 'Da Capo (DC) retour au début jusque \'Fine\'' },
              { name: 'Fine (Fin)' },
              { name: 'Prima Volta (le signe de première fois)' },
              { name: 'La liaison (lier deux notes)' },
              { name: 'Le signe de Code (sorte de raccourci)' },
              { name: 'L\'anacrouse (la première mesure est incomplète)' },
              { name: 'Stacatto (court)' },
          ],
          gammes: [
              { name: 'Gamme de Do majeur et accord parfait' },
          ],
          mouvements: [
              { name: 'Largo - large' },
              { name: 'Lento - lent' },
              { name: 'Adagio - à l\'aise' },
              { name: 'Andante - allant' },
              { name: 'Andantino - moins lent qu\'andante' },
              { name: 'Moderato - modéré' },
              { name: 'Allegreto - moins rapide qu\'allegro' },
              { name: 'Allegro - gai, rapide' },
              { name: 'Vivace - vif' },
              { name: 'Presto - très vite' },
              { name: 'Prestissimo - extrêmement vite' },
          ],
      }
  }
};
</script>