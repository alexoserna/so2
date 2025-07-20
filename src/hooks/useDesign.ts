import { DesignSystem } from '@/types';
import designData from '../../design.json';

export function useDesign(): DesignSystem {
  return designData as DesignSystem;
}

export function useColors() {
  const design = useDesign();
  return design.design_style.color_palette;
}

export function useTypography() {
  const design = useDesign();
  return design.design_style.typography;
}

export function useLayout() {
  const design = useDesign();
  return design.layout;
}

export function useInteractions() {
  const design = useDesign();
  return design.interactions;
}

export function useComponents() {
  const design = useDesign();
  return design.components;
}

export function useResponsive() {
  const design = useDesign();
  return design.responsive;
}