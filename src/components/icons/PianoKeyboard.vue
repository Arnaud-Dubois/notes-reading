<template>
  <div class="piano-keyboard">
    <div class="white-keys">
      <div
        @click="playSound(white.name)"
        :class="white.css"
        :key="white.key"
        v-for="white in whites"
      >
        <audio :id="white.name" :src="white.file"></audio>
        <div class="key-name">{{ white.name }}</div>
      </div>
    </div>
    <div class="black-keys">
      <div :class="black.css" :key="black.key" v-for="black in blacks">
        <div class="">{{ black.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
/* whites */
const c4 = require("@/assets/audio/mp3_notes/c4.mp3");
const d4 = require("@/assets/audio/mp3_notes/d4.mp3");
const e4 = require("@/assets/audio/mp3_notes/e4.mp3");
const f4 = require("@/assets/audio/mp3_notes/f4.mp3");
const g4 = require("@/assets/audio/mp3_notes/g4.mp3");
const a5 = require("@/assets/audio/mp3_notes/a5.mp3");
const b5 = require("@/assets/audio/mp3_notes/b5.mp3");
const c5 = require("@/assets/audio/mp3_notes/c5.mp3");

export default {
  name: "PianoKeyboard",
  data() {
    return {
      whites: [
        { key: "a", name: "do", css: "do", file: c4 },
        { key: "b", name: "ré", css: "re", file: d4 },
        { key: "c", name: "mi", css: "sol", file: e4 },
        { key: "d", name: "fa", css: "fa", file: f4 },
        { key: "e", name: "sol", css: "sol", file: g4 },
        { key: "f", name: "la", css: "la", file: a5 },
        { key: "g", name: "si", css: "si", file: b5 },
        { key: "do_plus", name: "do+", css: "do+", file: c5 },
      ],
      blacks: [
        { key: "h", name: "do#", css: "do" },
        { key: "i", name: "mib", css: "mi" },
        { key: "j", name: "fa#", css: "fa" },
        { key: "k", name: "sol#", css: "sol" },
        { key: "l", name: "sib", css: "si" },
      ],
    };
  },
  methods: {
    playSound(name) {
      const item = "#" + name;
      const file = document.querySelector(item);
      file.play();
    },
  },
};
</script>

<style>
.piano-keyboard {
  border: 1px solid lightgrey;
  position: relative;
}

.key-name {
  position: absolute;
  bottom: 1rem;
}

.white-keys {
  /* display: flex; */
  display: inline-flex;
  min-height: 140px;
}

.white-keys > div {
  display: flex;
  justify-content: center;
  background-color: white;
  width: 60px;
  border: 1px solid lightgrey;
  color: lightgrey;
  cursor: pointer;
  border-radius: .5rem;
  transition: background-color .1s ease-in;
}


.white-keys div:hover {
  background-color: var(--hover-color);
}

.black-keys {
  position: absolute;
  top: 0;
  display: flex;
}

.black-keys > div {
  background-color: black;
  position: absolute;
  width: 30px;
  min-height: 100px;
  cursor: pointer;
  border-radius: .25rem;
}

/* .black-keys div:hover {
  background-color: var(--hover-color);
} */

@media screen and (max-width: 640px) {
  .white-keys > div {
    width: 36px;
  }

  .black-keys > div {
    width: 18px;
  }
}


/* notes */
.do {
  left: 48px;
}
.mi {
  left: 110px;
}
.fa {
  left: 234px;
}
.sol {
  left: 296px;
}
.si {
  left: 358px;
}


@media screen and (max-width: 640px) {
  .do {
    left: 30px;
  }
  .mi {
    left: 67px;
  }
  .fa {
    left: 143px;
  }
  .sol {
    left: 181px;
  }
  .si {
    left: 219px;
  }
}
</style>