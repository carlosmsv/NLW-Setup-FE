import { Plus } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'

import logoImage from '../assets/logo.svg'

export function Header(){
  return (
    <div className ="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={ logoImage } alt="Habits"/>

      <Dialog.Root>
        <Dialog.Trigger
          type="button"
          className='border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300'
        >
          <Plus size={20} className="text-violet-500"/>
          Novo hábito
        </Dialog.Trigger>

        {/* Portal to place the modal content outside of Header, because it's supposed to be on the Body */}
        <Dialog.Portal>
          <Dialog.Overlay />
          
          <Dialog.Content>
            Conteúdo do Modal
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root> 
    </div>
  )
}