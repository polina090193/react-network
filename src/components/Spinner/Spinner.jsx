import spinner from '@/assets/img/spinner.svg'
import SpinnerCss from './Spinner.module.css'

const Spinner = () => <img alt="Content is loading" src={spinner} className={SpinnerCss.spinner} />

export default Spinner