export const SaveAsPdf = () => {
  const handleSaveAsPdf = async () => {
    const { default: html2pdf } = await import('html2pdf.js')
    const element = document.querySelector<HTMLElement>('#container')
    if (!element) throw new Error('no such element')

    await document.fonts.ready

    const images = Array.from(element.querySelectorAll('img'))
    await Promise.all(
      images.map((image) => {
        if (image.complete) return Promise.resolve()
        return new Promise<void>((resolve) => {
          image.addEventListener('load', () => resolve(), { once: true })
          image.addEventListener('error', () => resolve(), { once: true })
        })
      }),
    )

    await html2pdf()
      .set({
        margin: [8, 8, 8, 8],
        filename: 'ffxixslh-resume.pdf',
        image: {
          type: 'jpeg',
          quality: 0.98,
        },
        html2canvas: {
          scale: 2,
          useCORS: true,
          backgroundColor: '#f3f4f6',
          scrollX: 0,
          scrollY: 0,
          windowWidth: 740,
        },
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'portrait',
        },
      })
      .from(element)
      .save()
  }

  return (
    <div class="absolute right-4 top-2 rounded bg-white px-3 py-1 shadow-sm">
      <button type="button" onClick={handleSaveAsPdf}>
        保存
      </button>
    </div>
  )
}
