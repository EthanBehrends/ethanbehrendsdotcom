<script lang="ts">
    import "../fonts.css";
    import "../global.css";
    import { browser } from "$app/environment";

    let primary = {
        h: "199deg",
        s: "86%",
        l: "36%",
    }
</script>

<div class="content" style={`--primary-h: ${primary.h}; --primary-s: ${primary.s}; --primary-l: ${primary.l}; --primary-a: 100%;`}>
    <slot />
</div>
<style windi:preflights:global windi:safelist:global windi:global global>
    .scandia-web {
      font-family: 'scandia-web', serif;
    }
    .scandia-line-web {
      font-family: 'scandia-line-web', serif;
    }
    .source-code-pro {
      font-family: 'source-code-pro', serif;
    }
    .bree-serif {
      font-family: 'Bree Serif', serif;
    }
    .pt-sans {
      font-family: 'PT Sans', serif;
    }
  
    .primary {
      transition: .4s;
      --color-primary: hsla(var(--primary-h) var(--primary-s) var(--primary-l) / var(--primary-a))
    }
    .dark .primary {
      --color-primary: hsla(var(--primary-h) var(--primary-s) calc(100% - var(--primary-l)) / var(--primary-a))
    }

    @property --color-primary {
        syntax: "<color>";
        inherits: false;
        initial-value: hsla(var(--primary-h) var(--primary-s) var(--primary-l) / var(--primary-a));
    }
</style>