type HeaderProps = {
  content: string
}

const Header = ({ content }: HeaderProps) => {
  return <div className="text-Text/Main font-semibold text-lg lg:text-32 leading-42">{content}</div>
}

export default Header