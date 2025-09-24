<!-- The content will be also use in `docs/index.md` by `pymdownx.snippets` -->
<!-- Do not use any **relative link** and  **GitHub-specific syntax** ！-->
<!-- Do not rename or move the file -->

# PyTauri

[Tauri] bindings for Python through [Pyo3]

[Tauri]: https://github.com/tauri-apps/tauri

[Pyo3]: https://github.com/PyO3/pyo3

## Highlights
- 🌍 Use your favorite web framework to create your frontend.
- 🔄 Effortlessly send and receive data between your Python backend and your frontend.
- 🔋 Use [official Tauri plugins](https://v2.tauri.app/plugin/) to extend your app even further.
- 📦 Package your entire app into a single, standalone executable for easy distribution across platforms.
- ⚡ Hot reload both Python and JavaScript code for fast iteration.
- 🦀 Using Rust is [completely optional](usage/pytauri-wheel).
- 🖥️ Supports macOS, Linux and Windows.

## Installation
The recommended way of creating a new PyTauri project is through our template generator:

=== "macOS and Linux"

    ```console
    $ curl -LsSf https://astral.sh/uv/install.sh | sh
    ```

=== "Windows"

    ```pwsh-session
    PS> powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
    ```


!!!tip
    Want to set up a project from scratch instead? Consider checking out the [installation page]()
