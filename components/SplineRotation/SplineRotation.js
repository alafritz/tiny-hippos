import { FullBleedWrapper } from "@components/common/FullBleedWrapper";
import styles from "./SplineRotation.module.css";

export function SplineRotation() {
  return (
    <div className={styles.splineviewer}>
      <spline-viewer
        loading-anim
        url="https://prod.spline.design/2VBfQlbkZu9po01U/scene.splinecode"
      ></spline-viewer>
    </div>
  );
}
