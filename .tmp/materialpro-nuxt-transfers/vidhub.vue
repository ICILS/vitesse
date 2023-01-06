<script setup lang="ts">
// import VideoPlayer from "@/components/VideoPlayer.vue";

const videoOptions = {
  autoplay: true,
  controls: true,
  sources: [
    {
      src: '/path/to/video.mp4',
      type: 'video/mp4',
    },
  ],
}
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <header class="flex items-center py-3 px-3 z-10 shadow">
      <!--  Menu Icon  -->
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        class="w-8 h-8 opacity-75"
      >
        <g><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" /></g>
      </svg>
      <!--  VidHub Icon  -->
      <svg
        width="198"
        height="44"
        viewBox="0 0 198 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M62 6.87C61.28 4.17 59.1499 2.04 56.4399 1.31C51.5399 4.76837e-07 31.88 0 31.88 0C31.88 0 12.23 4.76837e-07 7.31995 1.31C4.61995 2.03 2.48995 4.16 1.75995 6.87C0.449951 11.77 0.449951 22 0.449951 22C0.449951 22 0.449951 32.23 1.75995 37.13C2.47995 39.83 4.60995 41.96 7.31995 42.69C12.23 44 31.88 44 31.88 44C31.88 44 51.5399 44 56.4399 42.69C59.1399 41.97 61.27 39.84 62 37.13C63.31 32.23 63.3099 22 63.3099 22C63.3099 22 63.31 11.77 62 6.87Z"
          fill="#FF0000"
        />
        <path d="M25.6 31.43L41.93 22L25.6 12.57V31.43Z" fill="white" />
        <path
          d="M76.7159 8.81818L79.7585 28.7102H80.0014L89.6278 8.81818H95.7642L82.392 35H75.2585L70.5668 8.81818H76.7159ZM94.4666 35L97.7393 15.3636H103.185L99.9126 35H94.4666ZM101.025 12.8068C100.215 12.8068 99.5462 12.5384 99.0178 12.0014C98.4979 11.456 98.2848 10.8082 98.3786 10.0582C98.4723 9.29119 98.8388 8.64347 99.478 8.11506C100.117 7.57812 100.842 7.30966 101.651 7.30966C102.461 7.30966 103.121 7.57812 103.633 8.11506C104.144 8.64347 104.357 9.29119 104.272 10.0582C104.187 10.8082 103.825 11.456 103.185 12.0014C102.555 12.5384 101.835 12.8068 101.025 12.8068ZM111.485 35.3196C109.985 35.3196 108.694 34.9361 107.612 34.169C106.538 33.3935 105.771 32.2557 105.311 30.7557C104.859 29.2472 104.816 27.3977 105.183 25.2074C105.558 22.9574 106.231 21.0866 107.203 19.5952C108.174 18.0952 109.325 16.9744 110.654 16.233C111.984 15.483 113.369 15.108 114.809 15.108C115.9 15.108 116.782 15.2955 117.456 15.6705C118.137 16.0369 118.662 16.4972 119.028 17.0511C119.395 17.5966 119.65 18.1335 119.795 18.6619H119.961L121.61 8.81818H127.044L122.697 35H117.328L117.852 31.8551H117.622C117.281 32.4006 116.829 32.9418 116.267 33.4787C115.713 34.0071 115.039 34.446 114.247 34.7955C113.463 35.1449 112.542 35.3196 111.485 35.3196ZM113.889 30.9858C114.758 30.9858 115.542 30.7472 116.241 30.2699C116.94 29.7841 117.528 29.1065 118.005 28.2372C118.483 27.3679 118.815 26.3494 119.002 25.1818C119.199 24.0142 119.203 23 119.015 22.1392C118.828 21.2784 118.461 20.6136 117.916 20.1449C117.379 19.6761 116.667 19.4418 115.781 19.4418C114.886 19.4418 114.093 19.6847 113.403 20.1705C112.721 20.6562 112.154 21.3295 111.703 22.1903C111.26 23.0511 110.944 24.0483 110.757 25.1818C110.569 26.3239 110.556 27.3338 110.718 28.2116C110.88 29.081 111.225 29.7628 111.754 30.2571C112.282 30.7429 112.994 30.9858 113.889 30.9858ZM127.264 35L131.611 8.81818H137.146L135.357 19.6207H146.594L148.384 8.81818H153.906L149.56 35H144.037L145.827 24.1847H134.589L132.8 35H127.264ZM168.007 26.6392L169.886 15.3636H175.332L172.06 35H166.831L167.419 31.4332H167.214C166.609 32.5838 165.727 33.5085 164.568 34.2074C163.409 34.9062 162.092 35.2557 160.618 35.2557C159.305 35.2557 158.197 34.9574 157.294 34.3608C156.399 33.7642 155.764 32.9162 155.389 31.8168C155.014 30.7173 154.95 29.4006 155.197 27.8665L157.294 15.3636H162.74L160.822 26.8949C160.643 28.054 160.805 28.9702 161.308 29.6435C161.811 30.3168 162.578 30.6534 163.609 30.6534C164.266 30.6534 164.901 30.5043 165.514 30.206C166.136 29.8991 166.673 29.4474 167.125 28.8509C167.577 28.2543 167.871 27.517 168.007 26.6392ZM176.518 35L180.865 8.81818H186.311L184.7 18.6619H184.853C185.177 18.1335 185.612 17.5966 186.157 17.0511C186.711 16.4972 187.389 16.0369 188.19 15.6705C188.991 15.2955 189.941 15.108 191.041 15.108C192.473 15.108 193.73 15.483 194.812 16.233C195.895 16.9744 196.674 18.0952 197.152 19.5952C197.629 21.0866 197.68 22.9574 197.305 25.2074C196.947 27.3977 196.287 29.2472 195.324 30.7557C194.369 32.2557 193.223 33.3935 191.885 34.169C190.555 34.9361 189.145 35.3196 187.653 35.3196C186.596 35.3196 185.727 35.1449 185.045 34.7955C184.372 34.446 183.848 34.0071 183.473 33.4787C183.098 32.9418 182.829 32.4006 182.667 31.8551H182.399L181.887 35H176.518ZM183.485 25.1818C183.298 26.3494 183.294 27.3679 183.473 28.2372C183.66 29.1065 184.018 29.7841 184.547 30.2699C185.083 30.7472 185.787 30.9858 186.656 30.9858C187.551 30.9858 188.343 30.7429 189.034 30.2571C189.733 29.7628 190.312 29.081 190.772 28.2116C191.233 27.3338 191.556 26.3239 191.744 25.1818C191.923 24.0483 191.927 23.0511 191.757 22.1903C191.586 21.3295 191.237 20.6562 190.708 20.1705C190.18 19.6847 189.464 19.4418 188.561 19.4418C187.683 19.4418 186.895 19.6761 186.196 20.1449C185.505 20.6136 184.926 21.2784 184.457 22.1392C183.997 23 183.673 24.0142 183.485 25.1818Z"
          fill="#282828"
        />
      </svg>

      <!--  search input  -->
      <div class="flex-1 justify-center hidden sm:flex">
        <input
          type="text"
          placeholder="Search"
          class="border border-grey px-3 py-2 w-1/2 max-w-md outline-none rounded-l"
        >
        <button
          class="flex justify-center items-center bg-grey-lighter px-6 border border-grey border-l-0 rounded-r focus:outline-none hover:bg-grey-light"
        >
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            class="w-5 opacity-50"
          >
            <g>
              <path
                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
              />
            </g>
          </svg>
        </button>
      </div>
      <!--  Account  -->
      <div class="ml-auto">
        <span class="block rounded-full bg-grey-darker w-8 h-8" />
      </div>
    </header>
    <!-- Main -->
    <main class="flex-1 bg-grey-lightest z-0 py-5 px-5">
      <div class="flex flex-wrap max-w-5xl mx-auto">
        <!-- main col -->
        <div class="w-full md:flex-1">
          <!-- player -->
          <div class="bg-black relative mb-3" style="padding-top: 55%" />
          <!-- video info -->
          <div class="flex flex-wrap items-end">
            <!-- title -->
            <div class="pb-2">
              <h1 class="text-xl my-2">
                Video title text
              </h1>
              <span class="text-base text-grey-darken">13 000 views</span>
            </div>
            <!-- buttons actions -->
            <div class="ml-auto">
              <!-- likes -->
              <div class="flex relative pb-2">
                <!-- like -->
                <div class="flex items-center">
                  <svg
                    class="w-5 opacity-75"
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                  >
                    <g>
                      <path
                        d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"
                        class="style-scope yt-icon"
                      />
                    </g>
                  </svg>
                  <span class="text-xs text-grey-darken ml-1">1 300</span>
                </div>
                <!-- hate -->
                <div class="flex items-center ml-5">
                  <svg
                    class="w-5 opacity-75"
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g>
                      <path
                        d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"
                        class="style-scope yt-icon"
                      />
                    </g>
                  </svg>
                  <span class="text-xs text-grey-darken ml-1">1</span>
                </div>
                <div
                  class="absolute w-full h-1 bg-grey pin-b t-5 rounded-full overflow-hidden"
                >
                  <div
                    class="absolute pin-l pin-t w-3/4 h-full bg-grey-darkest"
                  />
                </div>
              </div>
            </div>
            <hr class="w-full border-t m-0 mb-3">
          </div>
        </div>

        <!--  aside -->
        <aside
          class="w-full md:max-w-xs xl:max-w-full xl:w-1/4 md:pl-5 mt-5 md:mt-0"
        >
          <!-- up next -->
          <div class="w-full">
            <div class="flex w-full items-center justify-between mb-3">
              <span>Up Next</span>
              <div class="flex items-center">
                <span class="text-sm mr-2">AUTOLAY</span>
                <div class="bg-grey rounded-full w-8 h-3 flex items-center">
                  <span
                    class="block rounded-full w-5 h-5 bg-blue-dark ml-auto"
                  />
                </div>
              </div>
            </div>

            <div class="flex flex-wrap w-full">
              <div class="w-1/2 bg-black" style="padding-top: 30%" />
              <div class="w-1/2 pl-2">
                <h3 class="text-base mb-2">
                  Video upcoming title
                </h3>
                <p class="text-sm text-grey-darken mb-1">
                  Chanel
                </p>
                <p class="text-sm text-grey-darken mb-1">
                  13K views
                </p>
              </div>
              <hr class="w-full my-4 border-t">
            </div>
            <div class="flex flex-wrap w-full mb-3">
              <div class="w-1/2 bg-black" style="padding-top: 30%" />
              <div class="w-1/2 pl-2">
                <h3 class="text-base mb-2">
                  Video upcoming title
                </h3>
                <p class="text-sm text-grey-darken mb-1">
                  Chanel
                </p>
                <p class="text-sm text-grey-darken mb-1">
                  13K views
                </p>
              </div>
            </div>
            <div class="flex flex-wrap w-full mb-3">
              <div class="w-1/2 bg-black" style="padding-top: 30%" />
              <div class="w-1/2 pl-2">
                <h3 class="text-base mb-2">
                  Video upcoming title
                </h3>
                <p class="text-sm text-grey-darken mb-1">
                  Chanel
                </p>
                <p class="text-sm text-grey-darken mb-1">
                  13K views
                </p>
              </div>
            </div>
            <div class="flex flex-wrap w-full mb-3">
              <div class="w-1/2 bg-black" style="padding-top: 30%" />
              <div class="w-1/2 pl-2">
                <h3 class="text-base mb-2">
                  Video upcoming title
                </h3>
                <p class="text-sm text-grey-darken mb-1">
                  Chanel
                </p>
                <p class="text-sm text-grey-darken mb-1">
                  13K views
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  </div>
</template>
