import { Canvas, useThree, ThreeEvent } from "@react-three/fiber";
import { OrbitControls, Stars, Circle, RoundedBox } from "@react-three/drei";
import { Vector3 } from "three";
import { useRef, useState } from "react";

function Box() {
  return (
    <mesh>
      <boxGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

interface DraggableCircleProps {
  position: Vector3;
  setCirclePosition: React.Dispatch<React.SetStateAction<Vector3>>;
}

function DraggableCircle({
  position,
  setCirclePosition,
}: DraggableCircleProps) {
  const isDragging = useRef<boolean>(false);

  return (
    <Circle
      position={position}
      args={[0.5, 32]}
      onPointerDown={(event: ThreeEvent<PointerEvent>) => {
        console.log(event);
        isDragging.current = true;
      }}
      onPointerMove={(event: ThreeEvent<PointerEvent>) => {
        if (isDragging.current) {
          const newPosition = new Vector3();
          newPosition.set(
            event.point.x,
            event.point.y,
            position.z // Keep the Z-coordinate unchanged
          );
          setCirclePosition(newPosition);
        }
      }}
      onPointerUp={() => (isDragging.current = false)}
    />
  );
}

export function Field() {
  const [circle1Position, setCircle1Position] = useState<Vector3>(
    new Vector3(1, 0, 0)
  );
  const [circle2Position, setCircle2Position] = useState<Vector3>(
    new Vector3(-1, 0, 0)
  );
  const [circle3Position, setCircle3Position] = useState<Vector3>(
    new Vector3(-2, 0, 0)
  );

  return (
    <Canvas
      style={{
        height: "500px",
        width: "500px",
        backgroundColor: "var(--colors-green)",
      }}
    >
      <ambientLight intensity={0.3} position={[0, 1, 1]} />
      <spotLight position={[0, 1, 0]} angle={1} intensity={1} />
      {/* <Box /> */}
      <DraggableCircle
        position={circle1Position}
        setCirclePosition={setCircle1Position}
      />
      <DraggableCircle
        position={circle2Position}
        setCirclePosition={setCircle2Position}
      />
      <DraggableCircle
        position={circle1Position}
        setCirclePosition={setCircle1Position}
      />
      <DraggableCircle
        position={circle3Position}
        setCirclePosition={setCircle3Position}
      />
    </Canvas>
  );
}
