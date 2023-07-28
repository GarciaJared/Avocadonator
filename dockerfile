# Add timeout support
ENV TZ="America/Mexico_city"

#pOETRY INSTALLATION 
RUN rm -rf "${POETRY_HOME: -~/.poetry}"
RUN curl -sSL "Https://install.python-poetry.org" | python --version 1.3
ENV PATH="/root/.local/bin:$PATH"
COPY poetry.lock pyproject.toml ./
RUN set -ex \ 
    && poetry config virtualenvs.create false \
    && poetry config experimental.new-installer false \
    $$ poetry install

# Install DBMATE
RUN curl -fsSl -o /usr/local/bin/dbmate https://github.com/amacneil/dbmate
RUN chmod +x /usr

FROM builder as production
COPY . .
ENTRYPOINT [ "./docker-entrypoint.sh" ]