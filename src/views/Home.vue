<template>
  <div class="home">
    <div class="welcome">
      Hello 😃 seja bem vindo ao marketplace Sinoki Card Games 🚀
    </div>

    <div class="container">
      <div data-am-fadeshow="next-prev-navigation">
        <input type="radio" name="css-fadeshow" id="slide-1" />
        <input type="radio" name="css-fadeshow" id="slide-2" />
        <input type="radio" name="css-fadeshow" id="slide-3" />

        <div class="fs-slides">
          <div
            class="fs-slide"
            style="background-image: url(https://i.ibb.co/ZHF7SyQ/batalha.jpg)"
          ></div>
          <div
            class="fs-slide"
            style="background-image: url(https://i.ibb.co/k44tdZt/pokemon.jpg)"
          ></div>
          <div
            class="fs-slide"
            style="
              background-image: url(https://i.ibb.co/84JLDKQ/Ashe-Pikachu.jpg);
            "
          ></div>
        </div>
        <div class="fs-quick-nav">
          <label class="fs-quick-btn" for="slide-1"></label>
          <label class="fs-quick-btn" for="slide-2"></label>
          <label class="fs-quick-btn" for="slide-3"></label>
        </div>
        <div class="fs-prev-nav">
          <label class="fs-prev-btn" for="slide-1"></label>
          <label class="fs-prev-btn" for="slide-2"></label>
          <label class="fs-prev-btn" for="slide-3"></label>
        </div>
        <div class="fs-next-nav">
          <label class="fs-next-btn" for="slide-1"></label>
          <label class="fs-next-btn" for="slide-2"></label>
          <label class="fs-next-btn" for="slide-3"></label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.welcome {
  margin-top: 20px;
  font-family: "Ink Free";
  font-size: 27px;
  color: #f9105a;
}
$max-slides: 5;
$prefix: true;
$responsive: true;
$breakpoint-small: 500px;
$fade-time: 1;
$prev-next-fontfamily: sans-serif;
$prev-next-icon-size: 3vw;
$prev-next-icon-color: grey;
$prev-next-bg: rgba(255, 255, 255, 0);
$prev-next-bg-hover: rgba(255, 255, 255, 0.1);
$prev-icon: "❮";
$next-icon: "❯";
$autohide-next-prev: true;
$quick-nav-color: grey;
$quick-nav-active-color: #f9105a;
$fade-color: black;
$autoplay: true;
$autoplay-duration: 5;
@mixin fadeshow-transition($value...) {
  @if length($value) < 1 {
    $value: all 150ms linear;
  }
  @if $prefix == true {
    -webkit-transition: $value;
  }
  transition: $value;
}
@mixin fadeshow-transform($value...) {
  @if length($value) < 1 {
    $value: all 150ms linear;
  }
  @if $prefix == true {
    -webkit-transform: $value;
    -ms-transform: $value;
  }
  transform: $value;
}
@mixin fadeshow-animation($value...) {
  @if $prefix == true {
    -webkit-animation: $value;
  }
  animation: $value;
}
@mixin fadeshow-animation-delay($value) {
  @if $prefix == true {
    -webkit-animation-delay: $value;
  }
  animation-delay: $value;
}
@mixin fadeshow-unselectable() {
  @if $prefix == true {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }
  user-select: none;
}
@mixin quickNavBtnActive() {
  background-color: $quick-nav-active-color;
}

@mixin quickNavBtnInactive() {
  background-color: $quick-nav-color;
}
[data-am-fadeshow] {
  height: auto;
  width: 100%;
  overflow: hidden;
  background-color: $fade-color;
  .fs-slide {
    position: absolute;
    top: 95px;
    bottom: 0;
    left: 0;
    right: 0;
    height: 340px;
    opacity: 0;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    @include fadeshow-transition(opacity #{$fade-time}s ease);
    &:first-child {
      opacity: 1;
    }
  }
  .fs-quick-nav {
    position: absolute;
    bottom: 40px;
    left: 50%;
    z-index: 0;
    @include fadeshow-unselectable();
    @include fadeshow-transform(translateX(-50%));
  }
  .fs-quick-btn {
    display: inline-block;
    width: 15px;
    height: 15px;
    margin: 0 2px;
    border-radius: 50%;
    cursor: pointer;
    @include fadeshow-transition(opacity 200ms ease);
    @include quickNavBtnInactive();
    &:hover {
      opacity: 0.8;
    }
    &:first-child {
      @include quickNavBtnActive();
    }
  }
  %prev-next {
    position: absolute;
    display: none;
    top: 50px;
    bottom: 0;
    width: 90px;
    height: 340px;
    cursor: pointer;
    font-family: $prev-next-fontfamily;
    background-color: $prev-next-bg;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    @include fadeshow-transition(all 200ms ease);
    @if $responsive == true {
      @media (max-width: $breakpoint-small) {
        width: 50%;
      }
    }
    &:before {
      position: absolute;
      top: 50%;
      font-size: $prev-next-icon-size;
      color: $prev-next-icon-color;
    }
    &:hover {
      background-color: $prev-next-bg-hover;
      @if $responsive == true {
        @media (max-width: $breakpoint-small) {
          background-color: rgba(255, 255, 255, 0);
        }
      }
    }
  }
  input[type="radio"] {
    position: fixed;
    top: -9999px;
    &:checked {
      $i: $max-slides;
      @while $i > 0 {
        &:nth-of-type(#{$i}) {
          ~ .fs-slides {
            .fs-slide {
              opacity: 0;
              @include fadeshow-animation(none !important);
            }
            .fs-slide:nth-child(#{$i}) {
              opacity: 1;
            }
          }
          ~ .fs-quick-nav {
            .fs-quick-btn {
              @include quickNavBtnInactive();
              @include fadeshow-animation(none !important);
            }
            .fs-quick-btn:nth-child(#{$i}) {
              background-color: $quick-nav-active-color;
              &:hover {
                opacity: 1;
              }
            }
          }
        }
        $i: $i - 1;
      }
      &:first-of-type:last-of-type {
        ~ .fs-quick-nav,
        ~ .fs-prev-nav,
        ~ .fs-next-nav {
          display: none !important;
        }
      }
    }
  }
  @if $autohide-next-prev == true {
    &:hover {
      .fs-prev-btn,
      .fs-next-btn {
        @include fadeshow-transform(translateX(0));
      }
    }
  }
}
[data-am-fadeshow~="next-prev-navigation"] {
  input[type="radio"] {
    &:checked {
      $i: $max-slides;
      @while $i > 0 {
        &:nth-of-type(#{$i}) {
          $prev: ($i - 1);
          $next: ($i + 1);
          @if $prev > 0 {
            ~ .fs-prev-nav {
              .fs-prev-btn {
                display: none;
              }
              .fs-prev-btn:nth-child(#{$prev}) {
                display: block;
              }
            }
          }
          @if $next < ($max-slides + 1) {
            ~ .fs-next-nav {
              .fs-next-btn {
                display: none;
              }
              .fs-next-btn:nth-child(#{$next}) {
                display: block;
              }
            }
          }
          &:first-of-type {
            ~ .fs-prev-nav {
              .fs-prev-btn:last-child {
                display: block;
              }
            }
          }
          &:last-of-type {
            ~ .fs-next-nav {
              .fs-next-btn:first-child {
                display: block;
              }
            }
          }
        }
        $i: $i - 1;
      }
    }
  }
  .fs-prev-btn:last-child {
    display: block;
  }
  .fs-next-btn:nth-child(2) {
    display: block;
  }
}
@if $autoplay == true {
  $i: $max-slides;
  @while $i > 1 {
    $total-duration: $autoplay-duration * $i;
    @keyframes quickNavAnimation-#{$i} {
      0% {
        @include quickNavBtnInactive();
      }
      #{100% * $fade-time / $total-duration},
      #{100% * $autoplay-duration / $total-duration} {
        @include quickNavBtnActive();
      }
      #{100% * ($autoplay-duration + $fade-time) / $total-duration},
      100% {
        @include quickNavBtnInactive();
      }
    }
    @if $prefix == true {
      @-webkit-keyframes quickNavAnimation-#{$i} {
        0% {
          @include quickNavBtnInactive();
        }
        #{100% * $fade-time / $total-duration},
        #{100% * $autoplay-duration / $total-duration} {
          @include quickNavBtnActive();
        }
        #{100% * ($autoplay-duration + $fade-time) / $total-duration},
        100% {
          @include quickNavBtnInactive();
        }
      }
    }
    @keyframes slidesAnimation-#{$i} {
      0% {
        opacity: 0;
      }
      #{100% * $fade-time / $total-duration},
      #{100% * $autoplay-duration / $total-duration} {
        opacity: 1;
      }
      #{100% * ($autoplay-duration + $fade-time) / $total-duration},
      100% {
        opacity: 0;
      }
    }
    @if $prefix == true {
      @-webkit-keyframes slidesAnimation-#{$i} {
        0% {
          opacity: 0;
        }
        #{100% * $fade-time / $total-duration},
        #{100% * $autoplay-duration / $total-duration} {
          opacity: 1;
        }
        #{100% * ($autoplay-duration + $fade-time) / $total-duration},
        100% {
          opacity: 0;
        }
      }
    }
    [data-am-fadeshow~="autoplay"] {
      input[type="radio"]:nth-of-type(#{$i}):last-of-type {
        ~ .fs-slides {
          .fs-slide {
            @include fadeshow-animation(
              slidesAnimation-#{$i} #{$total-duration}s infinite
            );
          }
        }
        ~ .fs-quick-nav {
          .fs-quick-btn {
            @include fadeshow-animation(
              quickNavAnimation-#{$i} #{$total-duration}s infinite
            );
          }
        }
        @for $j from 1 through $i {
          ~ .fs-slides .fs-slide:nth-child(#{$j}),
          ~ .fs-quick-nav .fs-quick-btn:nth-child(#{$j}) {
            $animation-delay: #{($j - 1) * ($autoplay-duration) - $fade-time}s;
            @include fadeshow-animation-delay(#{$animation-delay});
          }
        }
      }
      $i: $i - 1;
    }
  }
}
.container {
  position: absolute;
  top: 170px;
  bottom: 20px;
  left: 0;
  right: 0;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
</style>
