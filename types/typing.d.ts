type Draw = {
    ctx: CanvasRenderingContext2D
    currentPoint: Point
    prevPoint: Point | null
}
  
type Point = { x: number; y: number }

type senderDraw = Draw & {
    color:string
    lineWidth:number
}