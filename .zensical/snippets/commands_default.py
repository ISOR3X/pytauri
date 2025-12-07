from pytauri import AppHandle, Commands

commands = Commands()


@commands.command()
async def fire_command(body: bytes) -> bytes:
    pass


@commands.command()
async def fire_other_command(body: bytes, app_handle: AppHandle) -> bytes:
    pass


def main() -> int:
    with start_blocking_portal("asyncio") as portal:
        app = builder_factory().build(
            invoke_handler=commands.generate_handler(portal),
            # ...
        )
        exit_code = app.run_return()
        return exit_code
