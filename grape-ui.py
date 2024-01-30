import os

# setup display variable
os.system("export DISPLAY=:0")

#imports
from tkinter import *
from PIL import Image, ImageTk
from _store import *

# app main screen
class App(Tk):
  def __init__(self):
    super().__init__()
    #self.geometry(f'{self.winfo_screenwidth()}x{self.winfo_screenheight()}')
    self.geometry(f'300x300')
    #self.overrideredirect(True)
    #self.config(image=PhotoImage('./grape-background-gradient.png'))
    
    img = PhotoImage(file="grape-background-gradient.png")
    
    background_label = Label(self, image=img, height=self.winfo_screenheight(), width=self.winfo_screenwidth())
    background_label.pack(expand=True, anchor=CENTER)
    
    
    
    Storage(Storages.miscellaneous)

    self.__call__()

  def __call__(self):
    self.mainloop()

App()