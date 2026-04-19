'use client'

/**
 * Fundo atmosférico (terminal + IA): visível em claro e escuro.
 * Usa z-0 (nunca -z-10) para não ficar atrás do paint do `body`.
 * `prefers-reduced-motion`: `.shell-amb-animate` em globals.css
 */
export function ShellAmbientBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Base: lavagem — mais suave no tema claro */}
      <div
        className="absolute inset-0 opacity-70 dark:opacity-100"
        style={{
          background: `
            linear-gradient(180deg,
              oklch(0.72 0.12 172 / 0.05) 0%,
              transparent 30%,
              transparent 70%,
              oklch(0.55 0.1 260 / 0.05) 100%
            )
          `,
        }}
      />

      {/* IA: brilho cónico */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70 dark:opacity-100">
        <div
          className="shell-amb-animate h-[min(180vh,1200px)] w-[min(180vw,1200px)] rounded-full opacity-[0.11] blur-3xl dark:opacity-[0.14]"
          style={{
            background:
              'conic-gradient(from 0deg at 50% 50%, oklch(0.55 0.18 260), oklch(0.5 0.14 172), oklch(0.52 0.16 200), oklch(0.48 0.12 280), oklch(0.55 0.18 260))',
            animation: 'shell-ai-glow 100s linear infinite',
          }}
        />
      </div>

      {/* Auroras */}
      <div
        className="shell-amb-animate absolute -left-[20%] top-0 h-[75vh] w-[85vw] max-w-[720px] rounded-[40%] bg-gradient-to-br from-teal-400/18 via-emerald-600/8 to-transparent blur-3xl dark:from-teal-400/25 dark:via-emerald-600/10"
        style={{ animation: 'shell-blob-drift 52s ease-in-out infinite' }}
      />
      <div
        className="shell-amb-animate absolute -right-[15%] bottom-0 h-[65vh] w-[80vw] max-w-[680px] rounded-[45%] bg-gradient-to-tl from-violet-500/14 via-cyan-500/6 to-transparent blur-3xl dark:from-violet-500/20 dark:via-cyan-500/8"
        style={{
          animation: 'shell-blob-drift 64s ease-in-out infinite',
          animationDelay: '-18s',
        }}
      />
      <div
        className="shell-amb-animate absolute left-[30%] top-[40%] h-[45vh] w-[50vw] max-w-[520px] rounded-[50%] bg-gradient-to-r from-emerald-500/10 to-transparent blur-3xl dark:from-emerald-500/12"
        style={{
          animation: 'shell-blob-drift 44s ease-in-out infinite',
          animationDelay: '-30s',
        }}
      />

      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full opacity-[0.02] dark:opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="shell-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#shell-noise)" />
      </svg>

      <div
        className="absolute inset-0 opacity-[0.06] dark:opacity-[0.1]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, oklch(0.72 0.14 172 / 0.05) 2px, oklch(0.72 0.14 172 / 0.05) 3px)',
        }}
      />

      {/* Vinheta: claro = cantos suaves; escuro = mais fechado */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_65%_at_50%_45%,transparent_25%,oklch(0.96_0.01_172)_100%)] opacity-50 dark:hidden"
      />
      <div
        className="absolute inset-0 hidden bg-[radial-gradient(ellipse_75%_60%_at_50%_45%,transparent_30%,oklch(0.04_0.03_172)_100%)] opacity-75 dark:block"
      />
    </div>
  )
}
