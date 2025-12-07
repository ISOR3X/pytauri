---
icon: lucide/database
---

# State management

https://pytauri.github.io/pytauri/latest/usage/tutorial/state-management/

```python

def setup_app(app: AppHandle):
    client_store = ClientStore(Path(environ["REPORTS_ROOT"]))
    summary_generator = SummaryGenerator(
        SecretStr(os.environ["API_KEY"])
    )

    _ = Manager.manage(app, client_store)
    _ = Manager.manage(app, summary_generator)


def main() -> int:
    with start_blocking_portal("asyncio") as portal:
        app = builder_factory().build(
            context=context_factory(SRC_TAURI_DIR, tauri_config=tauri_config),
            invoke_handler=commands.generate_handler(portal),
            setup=setup_app,
            plugins=[opener.init()],
        )
        exit_code = app.run_return()
        return exit_code

# ...
@commands.command("get-client-names")
async def get_client_names(client_store: Annotated[ClientStore, State()]) -> list[str]:
    return list(set([r.client for r in client_store.all_reports]))

```
