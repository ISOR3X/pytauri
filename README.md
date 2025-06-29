# PyTauri

[Tauri] bindings for Python through [PyO3]

PyTauri is an alternative to [pywebview] and [pystray], leveraging Tauri's comprehensive features to offer Python developers a GUI framework and a batteries-included development experience similar to [electron] and [PySide]. It is inspired by [FastAPI] and [Pydantic], aiming to offer a similar development experience.

Through [Pyo3], Rust developers can better utilize the Python ecosystem (e.g. building AI GUI applications with [PyTorch]). Although Rust's lifetime and ownership system makes Rust code safer, Python's garbage collection will make life easier.

- 🔄 Seamless communication between your favorite web framework and python thanks to Tauri  and PyO3
- 🔋Use tauri plugins such as notifications and dialogs to create a full native app experience
- 📦 Package your entire app into a single, standalone executable for easy distribution across platforms
- ⚡Enjoy a great developer experience with hot reloading both python and your frontend
- 🦀 Rust knowledge optional! `pytauri-wheel` is a precompiled version of pytauri which allows you to use pytauri without having a Rust compiler
- 🔗 Can be integrated with [nicegui], [gradio] or [FastAPI] to achieve a full-stack Python development experience (e.g. without `Node.js`).

### Used By

Although PyTauri is a fairly young project, a few people have used it to make cool projects:

-  <img src="https://solo.digger.lol/digger-logo.png" alt="Digger Solo Logo" width="20" height="20" style="vertical-align: middle;"> [Digger Solo](https://solo.digger.lol/) - AI powered file manager

*Are you using PyTauri? Let us know your experience!*


### Credits

PyTauri is a project that aims to provide Python bindings for [Tauri], a cross-platform webview GUI library. Tauri is a trademark of the Tauri Program within the Commons Conservancy and PyTauri is not officially endorsed or supported by them. PyTauri is an independent and community-driven effort that respects the original goals and values of Tauri. PyTauri does not claim any ownership or affiliation with the Tauri Program.

[Tauri]: https://github.com/tauri-apps/tauri
[PyO3]: https://github.com/PyO3/pyo3
[pywebview]: https://github.com/r0x0r/pywebview
[Pystray]: https://github.com/moses-palmer/pystray
[electron]: https://github.com/electron/electron
[PySide]: https://wiki.qt.io/Qt_for_Python
[FastAPI]: https://github.com/fastapi/fastapi
[Pydantic]: https://github.com/pydantic/pydantic
[PyTorch]: https://github.com/pytorch/pytorch
[nicegui]: https://github.com/zauberzeug/nicegui
[gradio]: https://github.com/gradio-app/gradio
