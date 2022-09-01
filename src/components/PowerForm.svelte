<script>
import { writable } from "svelte/store";
import { onMount, onDestroy } from 'svelte'


export let record = writable({})

let root 

const parseField = ({target: element}, strict = true) => {
    if (element.hasAttribute('power-form-ignore')) return
    
    let value = element.rawValue ?? element.value
    let name = element.name
    let format = element.getAttribute('format')

    if (!value) {
        delete $record[name]
        record.set({...$record})
        return
    }

    if (format) {
        value = formatValue(value, format, {strict})
    }

    if (value != element.value) element.value = value
    $record[element.name] = value
}
const handleChange = (e) => parseField(e, true)
const handleInput = (e) => parseField(e, false)


const updateFields = () => {
    if (!root) return

    let elements = [...root.querySelectorAll('input, textarea')]

    elements.forEach(element => {
        let name = element.name
        let value = $record[name]

        if (!name) return

        if (value == undefined) value = ''

        element.value = value
    })
}

$: $record, updateFields()

onMount(() => {
    root.addEventListener('input', handleInput)
    root.addEventListener('change', handleChange)
})
</script>

<div bind:this={root} class="p-4 w-full h-full">
    <slot />
</div>