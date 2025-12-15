---
icon: lucide/blocks
---

# Quick start

To get started with PyTauri, you’ll need to choose between two distributions, depending on how much control you want over the Rust side of your application.

1. __core__: This is the full PyTauri experience. It’s intended for projects where you want to write or customize Rust code alongside Python—such as adding native functionality, working directly with Tauri plugins, or fine-tuning the application’s build and runtime behavior. Choose this if you’re comfortable with Rust or need maximum flexibility and performance.

2. __wheel__: This option is designed for simplicity. It packages the Rust components for you, so you can focus entirely on Python without setting up or maintaining a Rust toolchain. It’s ideal for getting up and running quickly or for projects that don’t need custom Rust code.

Regardless of which version you choose, both require [pnpm] for managing frontend dependencies and [uv] for Python environment and package management.

## Core

### Creating a new project

The Core version of PyTauri can be set up easily using [create-pytauri-app](https://github.com/pytauri/create-pytauri-app).
The [pytauri-cli](../cli.md) also uses this under the hood.

Simply enter the command below and follow the prompts.

```
uvx copier copy https://github.com/pytauri/create-pytauri-app .
```

If you're looking to dive deeper into things and want to completely set up a new project by yourself step-by-step, [you can read how to here](./starting-from-scratch.md)

### Installing into an existing project

## Wheel



### Creating a new project

### Installing into an existing project




[pnpm]: https://pnpm.io/
[uv]: https://docs.astral.sh/uv/
