import { gray } from 'https://deno.land/std@v0.171.0/fmt/colors.ts'

const log = async (message: string) => {
  await Deno.stdout.write(new TextEncoder().encode(`\r\x1b[K${gray(message)}`))
}

export default log
