import { cn } from '@/lib/utils'

type Option<T extends string> = { value: T; label: string }

/** Reusable pill-select group. Pass `multi` to allow more than one selection. */
export function OptionGroup<T extends string>({
  label,
  options,
  value,
  onChange,
  multi = false,
}: {
  label: string
  options: Option<T>[]
  value: T | T[]
  onChange: (next: T | T[]) => void
  multi?: boolean
}) {
  const selected = multi ? (value as T[]) : [value as T]

  function handleClick(v: T) {
    if (!multi) {
      onChange(v)
      return
    }
    const current = value as T[]
    onChange(
      current.includes(v) ? current.filter((x) => x !== v) : [...current, v],
    )
  }

  return (
    <fieldset>
      <legend className="text-xs font-semibold tracking-wide text-body">
        {label}
      </legend>
      <div
        className="mt-2.5 flex flex-wrap gap-2"
        role={multi ? 'group' : 'radiogroup'}
      >
        {options.map((opt) => {
          const isActive = selected.includes(opt.value)
          return (
            <button
              key={opt.value}
              type="button"
              role={multi ? 'checkbox' : 'radio'}
              aria-checked={isActive}
              onClick={() => handleClick(opt.value)}
              className={cn(
                'rounded-full border px-3.5 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-bright',
                isActive
                  ? 'border-accent bg-accent/15 text-accent-bright'
                  : 'border-fg/12 text-body-dim hover:border-fg/25 hover:text-fg',
              )}
            >
              {opt.label}
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}
