import ScrollReveal from "scrollreveal"

const isServerSideRendering = typeof window === "undefined"
const scrollreveal = isServerSideRendering ? null : ScrollReveal()

export default scrollreveal
