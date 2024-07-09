// captionUtils.ts

interface Caption {
    id: string;
    start: number;
    end: number;
    text: string;
    font?: string;
    color?: string;
  }
  
  export function changeCaptionFont(captions: Caption[], selected_caption_i: number | null, font: string) {
    if (selected_caption_i !== null) {
      const updatedCaptions = [...captions];
      updatedCaptions[selected_caption_i] = {
        ...updatedCaptions[selected_caption_i],
        font: font,
      };
      return updatedCaptions;
    }
    return captions;
  }
  
  export function changeCaptionColor(captions: Caption[], selected_caption_i: number | null, color: string) {
    if (selected_caption_i !== null) {
      const updatedCaptions = [...captions];
      updatedCaptions[selected_caption_i] = {
        ...updatedCaptions[selected_caption_i],
        color: color,
      };
      return updatedCaptions;
    }
    return captions;
  }
  
  export function export2srt(captions: Caption[]): string {
    return captions.map(caption => {
      const start = formatTime(caption.start);
      const end = formatTime(caption.end);
      return `${caption.id}\n${start} --> ${end}\n${caption.text}\n` +
             `<!-- font: ${caption.font} color: ${caption.color} -->\n`;
    }).join('\n\n');
  }
  
  function formatTime(time: number): string {
    const date = new Date(0, 0, 0, 0, 0, 0, time * 1000);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const milliseconds = String(time % 1).split('.')[1].padEnd(3, '0');
    return `${hours}:${minutes}:${seconds},${milliseconds}`;
  }
  