interface TechTagProps {
  label: string
}

export default function TechTag({ label }: TechTagProps) {
  return <li className="tag">{label}</li>
}
