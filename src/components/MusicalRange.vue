<template>
  <div>
    <MusicStaff>
        <TrebleClef class="range-mode-icon"/>
        <div class="range-notes-list">
            <transition-group name="list">
                <div
                    :key="index + note.name"
                    v-for="(note, index) in range"
                    :style="`
                        left: ${index * 24}px;
                        bottom: ${note.y}px;
                        background-color: ${isColorMode ? note.color : 'black'};
                    `"
                    class="music-note"
                >
                </div>
            </transition-group>
        </div>
    </MusicStaff>
    <div class="controls-container">
        <button class="button button-primary" @click="getNewRange">Nouvelles notees</button>
        <div class="input-container">
            <label for="rangeNumber">Nombre de notes</label>
            <input name="rangeNumber" type="number" min="0" max="40" v-model="rangeNumber">
        </div>
        <div>
            <label for="colorMode">Mode couleur</label>
            <input type="checkbox" name="colorMode" id="colorMode" v-model="isColorMode">
        </div>
    </div>
  </div>
</template>

<script>
import TrebleClef from './icons/TrebleClef.vue'
import MusicStaff from './icons/MusicStaff.vue'

export default {
    name: 'MusicalRange',
    components: {
        TrebleClef,
        MusicStaff
    },
    data() {
        return {
            notes: [
                { name: 'Do', y: '-20', pos: '0', color: '#d73030' },
                { name: 'Re', y: '-12', pos: '20', color: '#e36e28' },
                { name: 'Mi', y: '-5', pos: '40', color: '#f2c71e' },
                { name: 'Fa', y: '2', pos: '60', color: '#99d521' },
                { name: 'Sol', y: '8', pos: '80', color: '#14b945' },
                { name: 'La', y: '16', pos: '100', color: '#3362d0' },
                { name: 'Si', y: '24', pos: '120', color: '#6562d0' },
                { name: 'Do+1', y: '30', pos: '140', color: '#A362d0' },
            ],
            range: [],
            rangeNumber: 10,
            isColorMode: false,
        }
    },
    mounted() {
        this.range = this.generateRange()
    },
    methods: {
        generateRange(number = 10) {
            let newArr = []
            for (let i = 0; i < number; i++) {
                const randomNumber = this.getRandomInt(0, this.notes.length)
                const note = this.notes[randomNumber]
                newArr.push(note)
            }

            return newArr
        },
        getNewRange() {
            this.range = this.generateRange(this.rangeNumber)
        },
        getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            
            return Math.floor(Math.random() * (max - min)) + min;
        }
    }
}
</script>

<style>


    .controls-container {
        margin: 4rem 0;
        display: flex;
        justify-content: center;
        gap: 1rem;
    }

    button {
        border: none;
        font-size: 1rem;
        padding: 1rem;
        border-radius: 6px;
        cursor: pointer;
        transition: background-color .4s ease;
    }

    .button-primary {
        background-color: #222222;
        color: white;
    }

    .button-primary:hover {
        background-color: black;
    }
    
    .music-note {
        background-color: black;
        position: absolute;
        width: 12px;
        height: 12px;
        border-radius: 50%;
    }

    /* Inputs */
    .input-container label {
        display: block;
        text-align: left;
        font-size: .8rem;
        font-weight: bold;
        padding: .25rem 0;
    }

    .input-container input {
        border: 1px solid #ddd;
        font-size: 1rem;
        font-weight: bold;
        border-radius: 6px;
        padding: 1rem;
    }


    /* Animations */
    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
        opacity: 0;
        transform: translateY(30px);
    }

    /* Range mode */
    .range-mode-icon {
        position: absolute;
        left: 0;
        top: -6px;
    }

    .range-notes-list {
        margin-left: 60px;
        position: absolute;
    }
</style>